import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../components/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        getCartData();
    }, [user, navigate]);

    const getCartData = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        setIsLoading(true);
        setError(null);

        axios
            .get(`${baseUrl}/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setCartItems(response.data);
                    calculateTotal(response.data);
                } else {
                    setError("Incorrect data format from server");
                }
            })
            .catch((error) => handleError(error))
            .finally(() => setIsLoading(false));
    };

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => {
            return sum + (item.price || 0) * (item.quantity || 1);
        }, 0);
        setTotalPrice(total);
    };

    const updateCart = async (productId, quantity) => {
        if (quantity < 1 || quantity > 99) {
            alert("Quantity must be between 1 and 99");
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        setIsUpdating(true);
        try {
            await axios.put(
                `${baseUrl}/cart/${productId}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        quantity: quantity,
                    },
                }
            );
            await getCartData();
        } catch (error) {
            handleError(error);
        } finally {
            setIsUpdating(false);
        }
    };

    const removeFromCart = async (productId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        setIsUpdating(true);
        try {
            await axios.delete(`${baseUrl}/cart/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            await getCartData();
        } catch (error) {
            handleError(error);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleQuantityChange = (e, productId) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (isNaN(newQuantity)) return;
        updateCart(productId, newQuantity);
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty");
            return;
        }
        navigate('/checkout');
    };

    const handleError = (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                navigate('/login');
            } else {
                setError("Server error: " + (error.response.data.message || error.response.data));
            }
        } else if (error.request) {
            setError("Request error: server did not respond");
        } else {
            setError("Unknown error: " + error.message);
        }
    };

    if (isLoading) {
        return (
            <div className="container my-4 d-flex justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container my-4">
                <div className="alert alert-danger d-flex justify-content-between align-items-center">
                    {error}
                    <Button variant="outline-danger" onClick={getCartData}>
                        Retry
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <section className="container my-4">
            <h1 className="fs-3">Cart</h1>
            {cartItems.length === 0 ? (
                <div className="alert alert-info">
                    Your cart is empty. <Link to="/shop">Continue shopping</Link>
                </div>
            ) : (
                <>
                    <div>
                        <table className="table table-borderless">
                            <thead>
                                <tr className="shadow">
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                {cartItems.map((item) => (
                                    <tr className="shadow" key={item.productId}>
                                        <td scope="row">
                                            <img
                                                width="100px"
                                                src={item.imageUrl || "/default-product.jpg"}
                                                alt={`${item.brand || "Unknown"} ${item.model || "Unknown"}`}
                                                onError={(e) => {
                                                    e.target.src = "/default-product.jpg";
                                                }}
                                            />
                                            <span>{`${item.brand || "Unknown brand"} ${item.model || "Unknown model"}`}</span>
                                        </td>
                                        <td>{`${item.price || 0}$`}</td>
                                        <td>
                                            <input
                                                className="form-control quantity-input"
                                                min="1"
                                                max="99"
                                                style={{ width: "60px" }}
                                                type="number"
                                                value={item.quantity || 1}
                                                onChange={(e) => handleQuantityChange(e, item.productId)}
                                                disabled={isUpdating}
                                            />
                                        </td>
                                        <td className="subtotal">{`${(item.price || 0) * (item.quantity || 1)}$`}</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeFromCart(item.productId)}
                                                disabled={isUpdating}
                                            >
                                                {isUpdating ? <Spinner animation="border" size="sm" /> : 'Remove'}
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="row my-5">
                        <div className="col-8"></div>
                        <div className="col-4">
                            <div className="border border-2 border-black p-4">
                                <h4>Cart total</h4>
                                <div className="d-flex py-3 justify-content-between border-bottom border-2">
                                    <div>Subtotal</div>
                                    <div className="subtotalElement">{`${totalPrice}$`}</div>
                                </div>
                                <div className="d-flex py-3 justify-content-between border-bottom border-2">
                                    <div>Shipping</div>
                                    <div>free</div>
                                </div>
                                <div className="d-flex py-3 justify-content-between">
                                    <div>Total</div>
                                    <div className="totalElement">{`${totalPrice}$`}</div>
                                </div>
                                <div className="text-center">
                                    <Button
                                        variant="danger"
                                        className="p-2 px-4"
                                        onClick={handleCheckout}
                                        disabled={isUpdating || cartItems.length === 0}
                                    >
                                        {isUpdating ? <Spinner animation="border" size="sm" /> : 'Proceed to checkout'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

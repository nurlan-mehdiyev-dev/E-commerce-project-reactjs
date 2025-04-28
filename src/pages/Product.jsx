import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function Product() {
  const { state } = useLocation(); // получаем переданный объект
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    if (state?.product) {
      setProduct(state.product);
    } else {
      console.error("Product not found in navigation state");
    }
    setIsLoading(false);
  }, [state]);

  const handleAddToCart = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      showNotification('Please log in to add items to your cart', 'error');
      return;
    }

    if (!product?.id) {
      showNotification('Product information is incomplete', 'error');
      return;
    }

    setIsLoading(true);

    fetch(`${baseUrl}/cart/${product.id}?quantity=1`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to add to cart');
        return response.json();
      })
      .then(() => {
        showNotification('Product added to cart', 'success');
      })
      .catch(error => {
        showNotification(`Error: ${error.message}`, 'error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
  };

  if (isLoading && !product) {
    return <div className="container my-5 text-center">Loading product details...</div>;
  }

  if (!product) {
    return <div className="container my-5 text-center">Product not found.</div>;
  }

  return (
    <section className="container my-5">
      <h1 className="fs-6">Product page</h1>
      <div className="row">
        <div className="col-md-7 p-3 p-md-5">
          <img className="w-100 rounded" src={product.imageUrl} alt={product.model} />
        </div>
        <div className="col-md-5">
          <h3 className="mt-3 mt-md-0">{product.brand} {product.model}</h3>
          <div className="text-warning mb-2">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
            <span className="text-secondary ms-2">(150 reviews)</span>
          </div>
          <p className="fs-3 fw-bold my-2">${product.price}</p>
          <p className="text-secondary">{product.description}</p>
          <hr className="my-4" />
          <button
            className="btn btn-dark p-3 px-4 fw-medium"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Add to cart'}
          </button>

          {notification.show && (
            <div className={`alert mt-3 ${notification.type === 'error' ? 'alert-danger' : 'alert-success'}`}>
              {notification.message}
            </div>
          )}

          <div className="mt-4 border rounded border-1 p-3 d-flex gap-3">
            <div><i className="bi bi-box fs-2 text-dark"></i></div>
            <div>
              <h5 className="mb-1">Free Delivery</h5>
              <p className="fw-medium mb-0"><u>Enter your postal code for Delivery Availability</u></p>
            </div>
          </div>

          <div className="mt-3 border rounded border-1 p-3 d-flex gap-3">
            <div><i className="bi bi-arrow-counterclockwise fs-2 text-dark"></i></div>
            <div>
              <h5 className="mb-1">Return Delivery</h5>
              <p className="fw-medium mb-0"><u>Free 30 Days Delivery Returns. Details</u></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

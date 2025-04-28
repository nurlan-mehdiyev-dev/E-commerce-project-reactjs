import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function ProductForm() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        category: '',
        description: '',
        price: '',
        rate: '',
        imageUrl: ''
    });
    const [imageError, setImageError] = useState(false);

    const navigate = useNavigate();

    // Load product data only once on component mount
    useEffect(() => {
        const formMode = sessionStorage.getItem('formMode');
        const productData = sessionStorage.getItem('product') ? JSON.parse(sessionStorage.getItem('product')) : null;
        
        if (formMode === 'editProduct' && productData) {
            setFormData(productData);
        }
    }, []); // Убираем зависимости, так как нам нужно только один раз при монтировании

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // For imageUrl, only reset the error state when changing the URL
        if (name === 'imageUrl') {
            setImageError(false);
        }
        
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const createProduct = () => {
        const token = localStorage.getItem("token");
        const config = { headers: { Authorization: `Bearer ${token}` } };
    
        axios.post(`${baseUrl}/products`, formData, config)
            .then(() => {
                alert("Product created");
                navigate('/userProducts');
            })
            .catch((error) => {
                console.error("Error creating product:", error);
                alert("Error occurred during product creation");
            });
    };
    
    const editProduct = () => {
        if (!formData.id) {
            alert("Invalid product data");
            return;
        }
        
        const token = localStorage.getItem("token");
        const config = { headers: { Authorization: `Bearer ${token}` } };
    
        axios.put(`${baseUrl}/products/${formData.id}`, formData, config)
            .then(() => {
                alert("Product edited");
                sessionStorage.removeItem('product');
                sessionStorage.removeItem('formMode');
                navigate('/userProducts');
            })
            .catch((error) => {
                console.error("Error editing product:", error);
                alert("Error occurred during product update");
            });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
    
        if (sessionStorage.getItem('formMode') === "editProduct") {
            editProduct();
        } else {
            createProduct();
        }
    
        setValidated(true);
    };
    

    const handleReset = () => {
        setFormData({
            brand: '',
            model: '',
            category: '',
            description: '',
            price: '',
            rate: '',
            imageUrl: ''
        });
        setValidated(false);
        setImageError(false);
        sessionStorage.removeItem('product');
        sessionStorage.removeItem('formMode');
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className='container col-6 my-5'>
            <h1 className='text-center'>{sessionStorage.getItem('formMode') === 'editProduct' ? 'Edit Product' : 'Create Product'}</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className='mb-3' controlId="field-brand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="brand"
                        value={formData.brand === undefined ? '' : formData.brand}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a brand name.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="field-model">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="model"
                        value={formData.model === undefined ? '' : formData.model}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a model name.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="field-category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="category"
                        value={formData.category === undefined ? '' : formData.category}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a category.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="field-description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        required
                        name="description"
                        value={formData.description === undefined ? '' : formData.description}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a description.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="field-price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        name="price"
                        value={formData.price === undefined ? '' : formData.price}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid price.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="field-rate">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        type="number"
                        min={1}
                        max={5}
                        step="0.1"
                        required
                        name="rate"
                        value={formData.rate === undefined ? '' : formData.rate}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a rating between 1 and 5.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="field-imageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="url"
                        required
                        name="imageUrl"
                        value={formData.imageUrl === undefined ? '' : formData.imageUrl}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid image URL.</Form.Control.Feedback>
                </Form.Group>

                {formData.imageUrl && !imageError && (
                    <div className="mb-3">
                        <img 
                            className='imageInForm my-2 w-100' 
                            src={formData.imageUrl} 
                            alt="Preview" 
                            onError={handleImageError}
                        />
                    </div>
                )}
                
                {imageError && formData.imageUrl && (
                    <div className="alert alert-warning mb-3">
                        Invalid image URL. Please check the URL and try again.
                    </div>
                )}

                <div className='d-flex gap-2'>
                    <Button type="submit" variant="primary">Save</Button>
                    <Button type="button" variant="warning" onClick={handleReset}>Reset</Button>
                </div>
            </Form>
        </div>
    );
}
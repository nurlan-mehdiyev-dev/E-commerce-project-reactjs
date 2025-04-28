import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_API_BASE_URL;


export default function Register() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    let navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    };

    const validateForm = () => {
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return false;
        }
        // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(formData.password)) {
        //     setError('Password must contain at least one letter and one number');
        //     return false;
        // }
        return true;
    };

    const handleSubmit = (event) => {
        console.log("handleSubmit")
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (form.checkValidity() === false || !validateForm()) {
            setValidated(true);
            return;
        }

        const { confirmPassword, ...dataToSend } = formData;

        axios.post(`${baseUrl}/auth/register`, dataToSend)
            .then((response) => {
                console.log(response.data);
                alert(response.data.message ? `Successful registration: ${response.data.message}` : "Registration completed successfully!");
                setFormData({
                    name: '',
                    surname: '',
                    email: '',
                    username: '',
                    password: '',
                    confirmPassword: ''
                });
                navigate("/login");
                console.log("/login")

            })
            .catch((error) => {
                console.error(error);
                if (error.response) {
                    alert(`Registration error: ${error.response.data}`);
                } else if (error.request) {
                    alert("Request error: No response from the server.");
                } else {
                    alert(`Unknown error: ${error.message}`);
                }
            });

        setValidated(true);
    };

    return (
        <div>
            <Form className='col-4 m-auto my-5' noValidate validated={validated} onSubmit={handleSubmit}>
                <h1 className="text-center">Create an Account</h1>
                <Row className="mb-3 g-4">
                    <Form.Group as={Col} md="12" controlId="validationName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationSurname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter your surname"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Choose a username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Create a password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            minLength={6}
                        />
                        <Form.Control.Feedback type="invalid">
                            {error || 'Please provide a valid password'}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Confirm your password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            {error || 'Please confirm your password'}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Button className='btn btn-danger w-100' type="submit">Register</Button>

                <p className="text-center my-2">
                    <span>Already have an account?</span>
                    <Link className="text-danger mx-3" to={'/login'}>Log in</Link>
                </p>
            </Form>
        </div>
    );
}

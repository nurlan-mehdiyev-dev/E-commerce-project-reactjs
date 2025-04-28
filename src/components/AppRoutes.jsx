import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFoundPage';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Profile from '../pages/Profile';
import UserProducts from '../pages/UserProducts';
import ProductForm from '../pages/ProductForm';
import Product from '../pages/Product';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="profile" element={<Profile />} />
        <Route path="userProducts" element={<UserProducts />} />
        <Route path="product-form" element={<ProductForm />} />
        <Route path="products/:id" element={<Product />} />


      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
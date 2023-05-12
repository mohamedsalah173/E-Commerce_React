import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { React, Fragment } from 'react';
import Navbar from './components/layout/navbar';
import Home from './components/home/home';
import About from './components/Information/aboutUs';
import Login from './components/client/login';
import Register from './components/client/register';
import Products from './components/products/products';
import Product from './components/products/product';
import Payment from './components/payment/payment';
import Cart from './components/cart/Cart';
import Footer from './components/layout/footer';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Fragment>
      <ToastContainer />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />


      </Routes>

      <Footer />

    </Fragment>
  );
};

export default App;

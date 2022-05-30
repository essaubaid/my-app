//import logo from './logo.svg';
import './App.css';
import Auth from "./cmp/Auth";
import Home from "./Pages/Home";
import Protected from './cmp/Protected';
import Profile from './cmp/Profile';
import Events from './cmp/Events';
import SignIn from './Pages/SignInPage';
import Register from './Pages/Register';
import Products from './Pages/ProductPage';
import Nav from './cmp/Nav/Nav';
import NavBar from './cmp/Nav/NavBar';
//import Event from './cmp/Event';
import Product from './Pages/product';
import ShippingDetails from './Pages/ShippingDetails';
import Cart from './Pages/Cart';
import { Route, Routes, Link, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <div>

      <Router>
        <Link to="home">Home</Link>
        <Link to="/">Login</Link>
        <Link to="profile">Profile</Link>
        <Link to="events">Events</Link>
        <Link to="signin">SignIn</Link>
        <Link to="register">Register</Link>
        <Link to="products">Products</Link>
        <Link to="nav">Nav</Link>
        <Link to="navbar">NavBar</Link>
        <Link to="product">product Page</Link>
        <Link to="ShippingDetails">ShippingDetails</Link>
        <Link to="cart">ShippingDetails</Link>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Protected cmp={Profile} />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signin" element={
            user ? <Navigate to="/home" /> : <SignIn />} />
          <Route path="/register" element={
            user ? <Navigate to="/home" /> : <Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/ShippingDetails" element={<ShippingDetails />} />
          <Route path="/cart" element={<Cart />} />

          {/* <Home />
          </Route>

          <Route path="/">
            <Auth />
          </Route> */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;

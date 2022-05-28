import logo from './logo.svg';
import './App.css';
import Auth from "./cmp/Auth";
import Home from "./Pages/Home";
import Protected from './cmp/Protected';
import Profile from './cmp/Profile';
import Events from './cmp/Events';
import SignIn from './cmp/SingIn/SignIn';
import Products from './Pages/ProductPage';
import Nav from './cmp/Nav/Nav';
import NavBar from './cmp/Nav/NavBar';
import Event from './cmp/Event';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>

      <Router>
        <Link to="home">Home</Link>
        <Link to="/">Login</Link>
        <Link to="profile">Profile</Link>
        <Link to="events">Events</Link>
        <Link to="signin">SignIn</Link>
        <Link to="products">Products</Link>
        <Link to="nav">Nav</Link>
        <Link to="navbar">NavBar</Link>

        <Routes>
          <Route path="/home" element={<Protected cmp={Home} />} />
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Protected cmp={Profile} />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/navbar" element={<NavBar />} />
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

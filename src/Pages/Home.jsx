import React, { Component } from 'react';
import Footer from '../cmp/Footer';
import Navbar from '../cmp/Nav/NavBar';
import Products from '../cmp/Products';
import Slids from '../cmp/Slids';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Slids />
                <Products />
                <Footer />
            </div>
        );
    }
}

export default Home;
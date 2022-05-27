import React, { Component } from 'react';
import Navbar from '../cmp/Nav/NavBar';
import Slids from '../cmp/Slids';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Slids />
            </div>
        );
    }
}

export default Home;
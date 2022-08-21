import React, { Component } from 'react';
import Footer from '../cmp/Footer';
import Navbar from '../cmp/Nav/NavBar';
import Products from '../cmp/Products';
import Slids from '../cmp/Slids';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get(`https://qdnmhwmb5d.us-east-1.awsapprunner.com/api/product/getAllProducts`
        ).then((res) => {
            this.setState({
                ProductList: res.data,
                isLoaded: true
            })

        }).catch(console.log)

    }

    render() {
        var { isLoaded, ProductList } = this.state;
        return (
            <div>
                <Navbar />
                <Slids />
                {/* <Products cmp={ProductList} /> */}
                <Products />
                <Footer />
            </div>
        );
    }
}

export default Home;
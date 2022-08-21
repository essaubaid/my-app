import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../cmp/Footer';
import Navbar from '../cmp/Nav/NavBar';
import Products from '../cmp/Products';
import axios from "axios";

const Container = styled.div`

`;

class ProductPage extends Component {

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
            <Container>
                <Navbar />
                <Products cmp={ProductList} />
                <Footer />
            </Container>
        );
    }
}

export default ProductPage;
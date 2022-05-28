import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../cmp/Footer';
import Navbar from '../cmp/Nav/NavBar';
import Products from '../cmp/Products';

const Container = styled.div`

`;

class ProductPage extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <Products />
                <Footer />
            </Container>
        );
    }
}

export default ProductPage;
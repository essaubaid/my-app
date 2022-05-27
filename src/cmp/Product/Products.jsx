import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import './Product-styles.css'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/product/getAllProducts`
        ).then((res) => {
            this.setState({
                Products: res.data,
                isLoaded: true
            })

        }).catch(console.log)

    }

    render() {
        var { isLoaded, Products } = this.state;

        if (!isLoaded)
            return <div>.....is Loading</div>

        else {
            return (
                <Container>
                    <h1 className='productTitle'>Our Products</h1>
                    <Row>
                        {Products.map(element => (
                            <Col md={3}>
                                <Product cmp={element} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            );
        }
    }
}

export default Products;
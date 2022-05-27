import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import image from '../../assets/default-placeholder.png';
import './Product-styles.css'

const Product = (props) => {
    const product = props.cmp;

    return (
        <Card className="text-start" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Rs.{product.productPrice}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
};

export default Product;
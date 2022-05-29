import React from 'react'
import styled from 'styled-components'
import { newProducts } from '../Dummy_Data';
import ProductCard from './ProductCard';

const Container = styled.div`
    padding: 20px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = (props) => {
    var ProductList = []
    if (!props.cmp) {
        ProductList = newProducts
    }
    else {
        ProductList = props.cmp
    }
    return (
        <Container>
            {ProductList.map((item) => (
                <ProductCard item={item} key={item._id} />
            ))}
        </Container>
    )
}

export default Products

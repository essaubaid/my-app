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


const Products = () => {
    return (
        <Container>
            {newProducts.map((item) => (
                <ProductCard item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products

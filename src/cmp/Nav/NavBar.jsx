import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
 border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;
const Button = styled.button`
padding: 5px;
border:0px;
background-color: black;
color:white;
cursor: pointer; 
font-weight:500;
margin-left:10px;

&:hover{
    background-color: #FFFFFF;
   color:black;
        
}

`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                    <Link to ="/products">
                    <Button>Products</Button>
                    </Link>


                </Left>
                <Center>

                    <Logo>THRIFTY.</Logo>
                </Center>
                <Right>
                    <Link to ="/register">
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/signin">
                    <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
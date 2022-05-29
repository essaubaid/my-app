import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
        url("https://t4.ftcdn.net/jpg/03/20/68/71/360_F_320687108_3UZ13l44Ob5cel208W7DaRnD5BR9DfY7.jpg") center;
        background-size: cover;

        display: flex;
        align-items: center;
        justify-content: center;
        
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;


`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 20px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

class Register extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                        <Input placeholder="Username" />
                        <Input placeholder="E-Mail" />
                        <Input placeholder="Password" />
                        <Input placeholder="Confirm Password" />
                        <Agreement>
                            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>Crate Account</Button>
                    </Form>
                </Wrapper>
            </Container>
        );
    }
}

export default Register;
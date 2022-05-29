import React, { Component } from 'react'
import styled from 'styled-components'
import axios from "axios"

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
    width: 25%;
    background-color: white;


`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    color: black;
    cursor: pointer;
`;
export default class SignInPage extends Component {

    async Login() {
        console.warn(this.state);
        fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        }).then((result) => {
            result.json().then((res) => {
                //console.log(res.others.token);
                localStorage.setItem("token", JSON.stringify(res.others.token));
                localStorage.setItem("User", JSON.stringify(res.others));
                //console.log(JSON.parse(localStorage.getItem("User")));
            })
        })
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <Title>Sign In</Title>
                    <Form>
                        <Input placeholder="Username" onChange={(e) => {
                            this.setState({ username: e.target.value });
                        }} />
                        <Input placeholder="Password" type="password" onChange={(e) => {
                            this.setState({ password: e.target.value });
                        }} />
                        <Button onClick={() => this.Login()}>LOGIN</Button>
                        <Link>FORGOT PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        )
    }
}

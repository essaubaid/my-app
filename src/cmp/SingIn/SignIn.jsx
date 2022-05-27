import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel, Container, Row, Col, FloatingLabel } from 'react-bootstrap';

class SignIn extends Component {
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
            <div>
                <Container>
                    <Form style={{ width: '18rem' }}>

                        <FormGroup className='mt-3 mb-3' controlId='fromUsername'>
                            <FloatingLabel className='mb-3' label='Username' controlId='floatingUsername'>
                                <FormControl placeholder='username' onChange={(e) => {
                                    this.setState({ username: e.target.value });
                                }}></FormControl>
                            </FloatingLabel>
                        </FormGroup>

                        <FormGroup className='mb-3' controlId='fromPassword'>
                            <FloatingLabel className='mb-3' label='Password' controlId='floatingPassword'>
                                <FormControl placeholder='password' type='password' onChange={(e) => {
                                    this.setState({ password: e.target.value });
                                }}></FormControl>
                            </FloatingLabel>
                        </FormGroup>

                        <Button onClick={() => this.Login()} className='float-start py-2 px-4'>SignIn</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default SignIn;
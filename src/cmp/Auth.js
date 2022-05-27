import axios from "axios";
import React, { Component } from "react";

class Auth extends Component {

    async Logout() {
        const id = JSON.parse(localStorage.getItem("User"))._id;
        const token = JSON.parse(localStorage.getItem("User")).token;
        console.log(token);
        const config = {
            headers: { token: `Bearer ${token}` }
        }
        const bodyParameters = {
            key: "value"
        };

        axios.put(`http://localhost:5000/api/auth/logout/${id}`,
            bodyParameters, config
        ).then((res) => {
            console.log(res);
        }).catch(console.log)

        localStorage.clear("User");
    }

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
                <input
                    type="text"
                    onChange={(e) => {
                        this.setState({ username: e.target.value });
                    }}
                ></input>
                <br></br>
                <input
                    type="text"
                    onChange={(e) => {
                        this.setState({ password: e.target.value });
                    }}
                ></input>
                <br></br>
                <button onClick={() => this.Login()}>Login</button>
                <button onClick={() => this.Logout()}>Logout</button>
            </div>
        );
    }
}

export default Auth;

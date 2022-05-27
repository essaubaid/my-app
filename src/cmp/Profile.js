import React, { Component } from 'react';

class Profile extends Component {
    user = JSON.parse(localStorage.getItem("User"));

    render() {
        return (
            <div>
                <h2>Username: {this.user.username}</h2>
                <h2>First Name: {this.user.f_name}</h2>
                <h2>Last Name: {this.user.l_name}</h2>
            </div>
        );
    }
}

export default Profile;
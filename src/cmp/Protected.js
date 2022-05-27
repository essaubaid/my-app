import React, { Component } from 'react';

const Protected = (props) => {
    const Cmp = props.cmp;
    const User = JSON.parse(localStorage.getItem("User"));
    console.log(User);


    if (User)
        return <div> <Cmp /> </div>;
    else
        return <div> You are not Authenticated </div>

};

export default Protected;
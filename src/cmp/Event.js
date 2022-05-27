import React, { Component } from 'react';


const Event = (props) => {
    const Cmp = props.cmp;

    return (
        <div>
            <div> Event Title: {Cmp.event_title}</div>
            <div> Event subtext: {Cmp.event_subtext}</div>
            <div> Event Fee: {Cmp.event_fee}</div>
        </div>
    )

};

export default Event;
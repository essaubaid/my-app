import React, { Component } from 'react';
import axios from 'axios';
import Block from './Event';

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Events: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/events/getEvents`
        ).then((res) => {
            this.setState({
                Events: res.data,
                isLoaded: true
            })

        }).catch(console.log)

    }

    render() {
        var { isLoaded, Events } = this.state;
        if (!isLoaded)
            return <div>is Loading.....</div>
        else {

            return (
                <div className="App">

                    <div>
                        {Events.map(Event => (
                            <div key={Event._id}>
                                <Block cmp={Event} />
                            </div>
                        ))}
                    </div>

                </div>
            );
        }
    }
}

export default Events;
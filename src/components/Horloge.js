import React, { Component } from 'react';

class Horloge extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleTimeString()
        }
        this.tictac = this.tictac.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tictac(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tictac() {
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }

    render() {
        return (
            <div>
                <h2>Il est : {this.state.date}</h2>
            </div>
        );
    }
}

export default Horloge;
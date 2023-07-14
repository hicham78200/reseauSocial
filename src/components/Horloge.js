import React, { Component } from 'react';

const FormatDate = (props) => {
    return <h2>Il est : {props.date.toLocaleTimeString()}</h2>
}

class Horloge extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
        }
        this.tictac = this.tictac.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tictac(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tictac() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return (
            <div>
                <FormatDate date={this.state.date} />
            </div>
        );
    }
}

export default Horloge;
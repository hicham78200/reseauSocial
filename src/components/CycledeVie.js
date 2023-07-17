import React, { Component } from 'react';

class CycledeVie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            methode: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.timerId = this.setState(() => ({
                methode: 120,
            }))
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        console.log(this)
        return (
            <div className='m-2rem'>
                Je teste les méthodes de cycles de vies : {this.state.methode}
            </div>
        );
    }
}

export default CycledeVie;
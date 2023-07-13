import React, { Component } from 'react'

class Compteur extends Component {
    constructor(props) {
        super(props)
        this.state = { cpt: 0 }

        this.incremente = this.incremente.bind(this)
        this.decremente = this.decremente.bind(this)
        this.reset = this.reset.bind(this)
    }

    incremente() {
        this.setState(
            { cpt: this.state.cpt + 1 }
        )
    }

    decremente() {
        this.setState(
            { cpt: this.state.cpt - 1 }
        )
    }

    reset() {
        this.setState(
            { cpt: 0 }
        )
    }

    render() {
        return (

            <div>
                <button className='btn' onClick={this.incremente}>+</button>
                <button className='btn' onClick={this.decremente}>-</button>
                <button className='btn' onClick={this.reset}>Reset</button>
                <p>Compteur : {this.state.cpt}</p>
            </div>

        )
    }
}

export default Compteur;
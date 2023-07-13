

import React, { Component } from 'react'

class ToogleButton extends Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((a) => ({
            isToggleOn: !a.isToggleOn
        }));
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick} className='btn'>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                {console.log(this.state)}
                {console.log(this.state.isToggleOn)}
            </>
        )
    }
}

export default ToogleButton

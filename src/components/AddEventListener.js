import React, { Component } from 'react';

class AddEventListener extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ""
        }
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleTouch = this.handleTouch.bind(this)
    }

    handleKeyPress(event) {
        if (event.keycode === 27) {
            this.handleTouch()
        }
    }

    handleTouch() {
        this.setState((state) => ({
            message: state.message + "vous avez appuyer sur la touche escape"
        }))
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }
    render() {
        return (
            <div>
                <h4>{this.state.message}</h4>
            </div>
        );
    }
}

export default AddEventListener;
import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {
        console.log(e.target.value)
        e.preventDefault();
        this.setState(() => ({
            input: e.target.value
        }))
    }

    render() {
        return (
            <div>
                <p>Ceci est un input contrôlé</p>
                <form >
                    <input
                        value={this.state.input}
                        onChange={this.handleChange} />
                    <br />
                    <button
                        type='submit'
                        className='btn'>Envoyer formulaire</button>
                </form>
            </div>

        );
    }
}




export default Input;
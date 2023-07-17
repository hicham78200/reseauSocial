import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            input2: "",
            submit: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        console.log(e.target.value)
        e.preventDefault();
        this.setState(() => ({
            input: e.target.value
        }))
    }
    handleChange2(e) {
        console.log(e.target.value)
        e.preventDefault();
        this.setState(() => ({
            input2: e.target.value
        }))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(() => ({
            //afficher la valeur de linput au clic ds le submit
            submit: [this.state.input, this.state.input2]
        }))
    }
    render() {
        return (
            <div>
                <p>Ceci est un input contrôlé</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.input}//modifie lint de linput
                        onChange={this.handleChange} />
                    <input
                        value={this.state.input2}//modifie lint de linput
                        onChange={this.handleChange2} />
                    <br />
                    <button
                        type='submit'
                        className='btn'>Envoyer formulaire</button>
                </form>

                <h4>La value de l'input au clic :
                    {this.state.submit[0]} et {this.state.submit[1]}</h4>
            </div>

        );
    }
}




export default Input;
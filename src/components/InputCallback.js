//passer fct d1 composant parent ds une props pr un composant enfant

import React, { Component } from 'react';

//composant parent
class InputCallback extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState(() => ({
            inputValue: e.target.value
        }))
    }

    render() {
        return (//ds le 1er compo enfant GetInput je lui transmet deux props avec
            //une key input et une value qui est this.state.inputValue et je lui
            //transmet une methode qui permet justement de pouvoir detecter que 
            //je tappe sur le clavier et aussi de mettre a jour le state
            <div>

                <GetInput
                    input={this.state.inputValue}
                    handleChange={this.handleChange} />

                <RenderInput input={this.state.inputValue} />
            </div>
        );
    }
}

//composant enfant
//Obtenir de la data de l'input

const GetInput = (props) => {
    return (//transmission données data et une methode handleChange
        <div>
            <p>Get Input (obtenir input)</p>
            <input value={props.input} onChange={props.handleChange} />
        </div>
    );
};

//afficher le comptenu de linput
const RenderInput = (props) => {
    return (
        <div>
            Le render input : {props.input}
        </div>
    );
};


export default InputCallback;
import React, { Component } from 'react';

const Resultat = (props) => {
    return (
        <div className='m-2rem'>
            Le resultat est : {props.ControleAge ? "entrez votre age" :
                props.userAge >= 18 ? "Vous etes majeur" : "Vous etes mineur"}
        </div>
    )
}

class ControleAge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            userAge: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState(() => ({

            input: e.target.value,//je vais chercher la valeur que jai ds linput
            userAge: ""
        }))
    }

    //ds handlesubmit au clic on va venir venir modifier le state 
    handleSubmit() {
        //on va aller prendre la propriete de useAge pr voir comment elle est 
        //avec previousState 
        this.setState((previousState) => ({
            //et apres je vais rajouter dans la key userAge la valeur quil y a ds linput
            userAge: previousState.input
        }))
    }
    //mettre une value a linput pr la recuperer

    render() {
        //au clic de btnSubmit mettre la valeur quil ya ds linput ds la var userAge
        const btnSubmit =
            <button
                className='btn'
                onClick={this.handleSubmit}>
                ENVOYER
            </button>
        const majeur =
            <p
                className='btn'
                style={{ backgroundColor: "green" }}
                onClick={this.handleSubmit}>
                Vous êtes majeur
            </p>
        const mineur =
            <p
                className='btn'
                onClick={this.handleSubmit}>
                Vous êtes mineur
            </p>

        const inputStyle = {
            border: "5px solid black"
        }

        const inputStyleRed = {
            border: "15px solid red"
        }

        console.log(this.state.input.length)
        //savoir cb de chiffre jai dans mon input
        const condition = this.state.input.length > 2
        return (
            <>
                <div>
                    <h4>Controle de l'age : </h4>
                    <input
                        style={condition ? inputStyleRed : inputStyle}
                        type="number"
                        value={this.state.input}
                        onChange={this.handleChange} />
                </div>

                {this.state.userAge === "" ? btnSubmit : this.state.userAge >= 18
                    ? majeur : mineur}

                <Resultat ControleAge={this.state.userAge === "" ? true : false}
                    userAge={this.state.userAge} />
            </>
        );
    }
}

export default ControleAge;
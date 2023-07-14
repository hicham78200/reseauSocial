
import React, { Component } from 'react'
import ReseauxSociaux from './ReseauxSociaux';
import ToogleButton from './ToogleButton';
import Compteur from './Compteur';
import Input from './Input';
// import Horloge from './Horloge';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: true
        }
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    toggleVisibility = () => {
        this.setState((previousState) => ({
            visibility: !previousState.visibility
        }));
    }
    render() {
        //si la key visibility ds le state a une valeur true alors jaffiche
        if (this.state.visibility) {
            return (
                <>
                    <div className='header-container'>
                        <h1>réseau social privé entreprise</h1>
                        <img src="https://via.placholder.com/800x150" alt="logo entreprise" />
                    </div>
                    {console.log(this)}

                    {/* <Horloge /> */}
                    <Input />

                    <button className='btn' onClick={this.toggleVisibility}>Cliquez sur le boutton</button>
                    <p>Bonjour je suis {this.props.user[0]} {this.props.user[1]}</p>
                    {/* <p>Aujourd'hui nous somme le : {this.state.date}</p> */}

                    <ReseauxSociaux />
                    <ToogleButton />
                    <Compteur />
                </>
            )
        } else {
            return (
                <>
                    <button className='btn' onClick={this.toggleVisibility}>
                        Cliquez pour afficher le texte
                    </button>
                </>
            )
        }
    }
}

export default Header;

// //props a partir dun tableau dans lelt parent

// const tableau = ["hicham", "Ashar"];
// <Composant user={tableau}/>

// //recupere les valeurs des props dans lelt enfant
// <p>Bonjour mon prenom est {props.user.join(" et mon nom ")}</p>
// <p>Bonjour mon prenom est {props.user.tableau[0]} et mon nom {props.user.tableau[1]}</p>


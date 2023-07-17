/**
 * Passer un state d'un composant parent comme props a un composant enfant
 */

import React, { Component } from 'react';

//composant parent


class InfoWebApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "hicham",
            lastName: "ashar"

        }
    }
    render() {
        return (
            //transmettre les nom au composant enfantje veux lui transmettre 
            //le states par le biais dune props
            //
            <div>
                <AffichageConnexion firstName={this.state.firstName} lastName={this.state.lastName} />
            </div>
        );
    }
}


//composant enfant


const AffichageConnexion = (props) => {
    return (
        <h4>Bonjour : {props.firstName} {props.lastName}</h4>
    );
};

export default InfoWebApi;

import React, { Component } from 'react'
import ReseauxSociaux from './ReseauxSociaux';

class Header extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     user: "hicham"
        // }
    }
    render() {
        // const user = this.state.user;

        return (
            <>
                <div className='header-container'>
                    <h1>réseau social privé entreprise</h1>
                    <img src="https://via.placholder.com/800x150" alt="logo entreprise" />

                </div>
                <p>Bonjour je suis {this.props.user} et {this.props.user2}</p>
                <p>Aujourd'hui nous somme le : {this.props.date}</p>
                <ReseauxSociaux />
                <button className='btn' onClick={this.handleClick}>Cliquez sur le boutton</button>
            </>
        )
    }
}

export default Header;
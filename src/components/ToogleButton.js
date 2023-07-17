

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
        //condition ternaire pr chgt detat btn au click 
        // return (
        //     <>
        //         <button onClick={this.handleClick} className='btn'>
        //             {this.state.isToggleOn ? 'ON' : 'OFF'}
        //         </button>
        //         {console.log(this.state.isToggleOn)}
        //     </>
        // )

        //condition && pr chgt detat btn au click
        return (
            <>
                {this.state.isToggleOn &&
                    <button onClick={this.handleClick} className='btn'>
                        ON
                    </button>}

                {!this.state.isToggleOn &&
                    <button onClick={this.handleClick} className='btn'>
                        OFF
                    </button>}

                <button onClick={this.handleClick} className='btn'>
                    {this.state.isToggleOn ? "boutton a ON" : " boutton a OFF"}
                </button>

                {console.log(this.state.isToggleOn)}
            </>
        )

        //condition if/else pr chgt detat btn au click
        // if (this.state.isToggleOn) {
        //     return (
        //         <>
        //             <button onClick={this.handleClick} className='btn'>
        //                 ON
        //             </button>
        //             {console.log(this.state.isToggleOn)}
        //         </>
        //     )
        // } else {
        //     return (
        //         <>
        //             <button onClick={this.handleClick} style={
        //                 {
        //                     color: "yellowgreen",
        //                     height: "5rem",
        //                     width: "10rem",
        //                     fontWeight: 900,
        //                     fontSize: "3rem"
        //                 }
        //             }>
        //                 OFF
        //             </button>
        //             {console.log(this.state.isToggleOn)}
        //         </>
        //     )
        // }
    }
}


export default ToogleButton

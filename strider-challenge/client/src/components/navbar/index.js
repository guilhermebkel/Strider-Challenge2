import React, { Component } from 'react';
import './style.css'
import StriderLogo from '../../resources/logo.svg'

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }  

    render(){
        return(
            <div className="navbar">
                <a href="https://strider.ag/" target="_blank" rel="noopener noreferrer">
                    <img className="logo" alt="strider-logo" src={StriderLogo} />
                </a>
            </div>
        );
    }
}

export default Navbar;
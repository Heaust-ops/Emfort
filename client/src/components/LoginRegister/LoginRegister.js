import React, { Component } from 'react';
import './LoginRegister.css';

export class LoginRegister extends Component {
    render() {
        return (
            <div id="LoginRegister" style={{transform: "translate(30%,0) skewX(-8deg)"}} className={`${this.props.className}`}>
                <div style={{transform : "skewX(8deg) translateX(25%) translateY(10rem)"}} className={`text-white`}>
                    <h1>hello world</h1>
                </div>
            </div>
        )
    }
}

export default LoginRegister

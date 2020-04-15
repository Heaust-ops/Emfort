import React, { Component } from 'react'
import './RegisterForm.css';

export class RegisterForm extends Component {
    render() {
        return (
            <div id='RegisterForm' className={`${this.props.className}`}>
                <h1
          id="register_heading"
          style={{transform : 'translateX(-2.5rem)'}}
          className="cursor-default text-4xl duration-500 tracking-widest"
        >REGISTER</h1>
         <br></br>
        <input
          size="15"
          style={{transform : 'translateX(-10rem)'}}
          className="text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="text"
          placeholder="USERNAME"
        ></input>
        <br></br>
        <br></br>
        <input
          size="20"
          style={{transform : 'translateX(-8rem)'}}
          className="text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="text"
          placeholder="Email@Domain.com"
        ></input>
        <br></br>
        <br></br>
        <input
          size="15"
          style={{transform : 'translateX(-2rem)'}}
          className="text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="password"
          placeholder="PASSWORD"
        ></input>
            </div>
        )
    }
}

export default RegisterForm

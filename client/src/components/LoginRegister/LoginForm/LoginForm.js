import React, { Component } from "react";
import "./LoginForm.css";

export class LoginForm extends Component {
  render() {
    return (
      <div id='LoginForm' className={`${this.props.className}`}>
        <h1
          id="login_heading"
          style={{transform : 'translateX(-0.5rem)'}}
          className="cursor-default text-4xl duration-500 tracking-widest"
        >
          LOGIN
        </h1>
        <br></br>
        <input
          size="15"
          style={{transform : 'translateX(-8rem)'}}
          spellCheck="false"
          className="text-3xl login_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="text"
          placeholder="USERNAME"
        ></input>
        <br></br>
        <br></br>
        <input
          size="15"
          style={{transform : 'translateX(-6rem)'}}
          className="text-3xl login_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="password"
          placeholder="PASSWORD"
        ></input>
      </div>
    );
  }
}

export default LoginForm;

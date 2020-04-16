import React, { Component } from "react";
import "./LoginForm.css";

export class LoginForm extends Component {
  state = {
    loginHeadingSpread: false,
  };

  headingSpread = () => {
    this.setState({ loginHeadingSpread: true });
  };

  headingUnSpread = () => {
    this.setState({ loginHeadingSpread: false });
  };

  render() {
    return (
      <div id="LoginForm" className={`${this.props.className}`}>
        <h1
          id="login_heading"
          onMouseEnter={this.headingSpread}
          onMouseLeave={this.headingUnSpread}
          style={{ transform: "translateX(-0.5rem)" }}
          className={`${
            this.state.loginHeadingSpread ? "spread" : ""
          } LoginRegisterForm_heading cursor-default text-4xl duration-500 tracking-widest`}
        >
          LOGIN
        </h1>
        <br></br>
        <input
          size="15"
          style={{ transform: "translateX(-8rem)" }}
          spellCheck={false}
          className="text-3xl login_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="text"
          placeholder="USERNAME"
        ></input>
        <br></br>
        <br></br>
        <input
          size="15"
          style={{ transform: "translateX(-6rem)" }}
          className="text-3xl login_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="password"
          placeholder="PASSWORD"
        ></input>
        <br></br>
        <br></br>
        <button
        id="login_submit"
          onMouseEnter={this.headingSpread}
          onMouseLeave={this.headingUnSpread}
          onClick={this.check}
          style={{ transform: "translateX(3rem)" }}
          className="text-3xl LoginRegisterForm_submit mt-2 text-gray-600 hover:text-white py-2 px-6 rounded-full rounded-bl-full duration-500 tracking-widest text-center bg-transparent"
        >
          PROCEED
        </button>
      </div>
    );
  }
}

export default LoginForm;

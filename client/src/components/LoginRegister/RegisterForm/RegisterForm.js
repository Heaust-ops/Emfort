import React, { Component } from "react";
import "./RegisterForm.css";

export class RegisterForm extends Component {
  state = {
    registerHeadingSpread: false,
  };

  headingSpread = () => {
    this.setState({ registerHeadingSpread: true });
  };

  headingUnSpread = () => {
    this.setState({ registerHeadingSpread: false });
  };

  render() {
    return (
      <div id="RegisterForm" className={`${this.props.className}`}>
        <h1
          id="register_heading"
          onMouseEnter={this.headingSpread}
          onMouseLeave={this.headingUnSpread}
          style={{ transform: "translateX(-2.5rem)" }}
          className={`${
            this.state.registerHeadingSpread ? "spread" : ""
          } LoginRegisterForm_heading cursor-default text-4xl duration-500 tracking-widest`}
        >
          REGISTER
        </h1>
        <br></br>
        <input
          size="15"
          spellCheck={false}
          style={{ transform: "translateX(-10rem)" }}
          className="text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="text"
          placeholder="USERNAME"
        ></input>
        <br></br>
        <br></br>
        <input
          size="20"
          spellCheck={false}
          style={{ transform: "translateX(-8rem)" }}
          className="text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="text"
          placeholder="Email@Domain.com"
        ></input>
        <br></br>
        <br></br>
        <input
          size="15"
          spellCheck={false}
          style={{ transform: "translateX(-2rem)" }}
          className="text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full"
          type="password"
          placeholder="PASSWORD"
        ></input>
        <br></br>
        <br></br>
        <button
        id="register_submit"
          onMouseEnter={this.headingSpread}
          onMouseLeave={this.headingUnSpread}
          onClick={this.check}
          style={{ transform: "translateX(6.7rem)" }}
          className="text-3xl LoginRegisterForm_submit mt-2 text-gray-600 hover:text-white py-2 px-6 rounded-full rounded-bl-full duration-500 tracking-widest text-center bg-transparent"
        >
          PROCEED
        </button>
      </div>
    );
  }
}

export default RegisterForm;

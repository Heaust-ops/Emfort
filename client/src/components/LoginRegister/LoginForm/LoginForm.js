import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorActions";
import { resetLoginRegister } from "../../../actions/loginRegisterActions";
import "./LoginForm.css";

export class LoginForm extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    resetLoginRegister: PropTypes.func.isRequired,
  };

  state = {
    loginHeadingSpread: false,
    msg: null,
    msgView: null,
    username: "",
    password: "",
    userBlink: null,
    passBlink: null,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated, resetLoginRegister } = this.props;
    if (error !== prevProps.error) {
      // Check for Login error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg, msgView: true }, () => {
          setTimeout(() => {
            this.setState({ msgView: false });
          }, 3000);
        });
      } else {
        this.setState({ msg: null });
      }
    }

    // On Succesful Authentication
    if (isAuthenticated) resetLoginRegister();
  }

  toggleBlink = (
    state2blink,
    callback = () => {
      /** pass */
    }
  ) => {
    this.setState({ [state2blink]: !this.state[state2blink] }, () => {
      callback();
    });
  };

  blinkN = (state2blink, times) => {
    let n = 1;
    this.toggleBlink(state2blink);
    let blink = () => {
      if (n >= 2 * times) return;
      else n++;
      setTimeout(() => {
        this.toggleBlink(state2blink, blink);
      }, 300);
    };
    blink();
  };

  headingSpread = () => {
    this.setState({ loginHeadingSpread: true });
  };

  headingUnSpread = () => {
    this.setState({ loginHeadingSpread: false });
  };

  Proceed = () => {
    let username = this.state.username;
    let password = this.state.password;
    if (!username) {
      this.blinkN("userBlink", 4);
      return;
    }
    if (!password) {
      this.blinkN("passBlink", 4);
      return;
    }
    this.props.login({ username, password });
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
          value={this.state.username}
          maxLength={10}
          style={{ transform: "translateX(-8rem)" }}
          onChange={(event) => {
            event.persist();
            this.setState({
              username: event.target.value.replace(/[^A-Za-z0-9_.]/gm, ""),
            });
          }}
          spellCheck={false}
          className={`${
            this.state.userBlink ? "warning_blink" : ""
          } text-3xl login_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
          type="text"
          placeholder="USERNAME"
        ></input>
        <br></br>
        <br></br>
        <input
          size="15"
          value={this.state.password}
          maxLength={18}
          style={{ transform: "translateX(-6rem)" }}
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
          className={`${
            this.state.passBlink ? "warning_blink" : null
          } text-3xl login_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
          type="password"
          placeholder="PASSWORD"
        ></input>
        <br></br>
        <br></br>
        <div className="flex flex-col justify-between">
          <button
            id="login_submit"
            onMouseEnter={this.headingSpread}
            onMouseLeave={this.headingUnSpread}
            onClick={this.Proceed}
            style={{ transform: "translateX(3rem)" }}
            className="text-3xl LoginRegisterForm_submit mt-2 text-gray-600 hover:text-white py-2 px-6 rounded-full rounded-bl-full duration-500 tracking-widest text-center bg-transparent"
          >
            PROCEED
          </button>
          <h1
            style={{ transform: "translateX(-5rem)" }}
            className={`${
              this.state.msgView ? "opacity-100" : "opacity-0"
            } tracking-widest duration-500 text-red-400 mt-6 text-xl`}
          >
            {this.state.msg}
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, {
  login,
  clearErrors,
  resetLoginRegister,
})(LoginForm);

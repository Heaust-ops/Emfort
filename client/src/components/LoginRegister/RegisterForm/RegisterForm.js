import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorActions";
import { resetLoginRegister } from "../../../actions/loginRegisterActions";
import "./RegisterForm.css";

export class RegisterForm extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    resetLoginRegister: PropTypes.func.isRequired,
  };

  state = {
    registerHeadingSpread: false,
    msg: null,
    msgView: null,
    username: "",
    email: "",
    password: "",
    userBlink: null,
    passBlink: null,
    emailBlink: null,
    passHolder: `PASSWORD`,
    passShow: null,
  };

  componentDidUpdate(prevProps) {
    const { error, regmsg } = this.props;
    if (error !== prevProps.error) {
      // Check for Register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg, msgView: true }, () => {
          setTimeout(() => {
            this.setState({ msgView: false });
          }, 3000);
        });
      } else {
        this.setState({ msg: null });
      }
    } else if (
      typeof regmsg !== "undefined" &&
      regmsg !== prevProps.regmsg &&
      regmsg === "Registration Successful"
    ) {
      this.setState({
        username: "Hi!",
        email: `Please Check Your mail and verify it!`,
        password: ``,
        passHolder: "Thank You!",
      });
      setTimeout(() => {
        this.setState({ passHolder: `PASSWORD` });
      }, 10000);
    }
  }

  togglePassShow = () => {
    this.setState({ passShow: !this.state.passShow });
  };

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
    this.setState({ registerHeadingSpread: true });
  };

  headingUnSpread = () => {
    this.setState({ registerHeadingSpread: false });
  };

  Proceed = () => {
    let username = this.state.username;
    let password = this.state.password;
    let email = this.state.email;
    if (!username.match(/^[A-Za-z0-9_.]+$/g)) {
      this.blinkN("userBlink", 4);
      return;
    }
    if (
      !email ||
      !email.match(
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g
      )
    ) {
      this.blinkN("emailBlink", 4);
      return;
    }
    if (!password) {
      this.blinkN("passBlink", 4);
      return;
    }
    this.props.register({ username, email, password });
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
        <div style={{ transform: "translateX(-10rem)" }} className="m-0 p-0">
          <input
            size="15"
            value={this.state.username}
            maxLength={10}
            onChange={(event) => {
              this.setState({
                username: event.target.value.replace(/[^A-Za-z0-9_.]/gm, ""),
              });
            }}
            spellCheck={false}
            className={`${
              this.state.userBlink ? "warning_blink" : ""
            } text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
            type="text"
            placeholder="USERNAME"
          ></input>
          {this.props.isLoading === "REGISTER_START" ? (
            <img
              id={`loading_logo`}
              src={`/images/logo.svg`}
              className={`w-12 h-12 left-0 inline-block`}
              alt="Loading"
            ></img>
          ) : null}
        </div>
        <br></br>
        <input
          size={
            this.state.email.length > 19
              ? `${
                  this.state.email.length > 23
                    ? `${this.state.email.length > 27 ? 35 : 28}`
                    : `23`
                }`
              : `20`
          }
          value={this.state.email}
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
          spellCheck={false}
          style={{
            transform: `translateX(${
              this.state.email.length > 19 ? "-10rem" : "-8rem"
            })`,
          }}
          className={`${
            this.state.email.length > 23
              ? `${
                  this.state.email.length > 27
                    ? `text-xl py-4`
                    : `text-2xl py-3`
                }`
              : "text-3xl"
          } ${
            this.state.emailBlink ? "warning_blink" : null
          } register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
          type="text"
          placeholder="Email@Domain.com"
        ></input>
        <br></br>
        <br></br>
        <i
          style={{ transform: "translateX(-6rem)" }}
          onClick={this.togglePassShow}
          className={`nav-open text-4xl pass_show_eye mt-1 duration-500 fa fa-eye lg`}
        ></i>
        <input
          size="15"
          value={this.state.password}
          maxLength={18}
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
          spellCheck={false}
          style={{ transform: "translateX(-4.5rem)" }}
          className={`${
            this.state.passBlink ? "warning_blink" : null
          } text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
          type={this.state.passShow ? "text" : "password"}
          placeholder={this.state.passHolder}
        ></input>
        <br></br>
        <br></br>
        <div className="flex flex-col justify-between">
          <button
            id="register_submit"
            onMouseEnter={this.headingSpread}
            onMouseLeave={this.headingUnSpread}
            onClick={this.Proceed}
            style={{ transform: "translateX(6.7rem)" }}
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
  regmsg: state.auth.msg,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, {
  register,
  clearErrors,
  resetLoginRegister,
})(RegisterForm);

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  toggle2Login,
  toggle2Register,
  resetLoginRegister,
} from "../../actions/loginRegisterActions";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import "./LoginRegister.css";

export class LoginRegister extends Component {
  static propTypes = {
    toggle2Login: PropTypes.func.isRequired,
    toggle2Register: PropTypes.func.isRequired,
    resetLoginRegister: PropTypes.func.isRequired,
    turn: PropTypes.string.isRequired,
    authForm: PropTypes.string.isRequired,
  };

  onClickResetLoginRegister = () => {
    if (this.props.authForm) this.props.resetLoginRegister();
  };

  render() {
    return (
      <div
        id="LoginRegister"
        className={`${this.props.className} ${
          this.props.authForm ? "active" : "deactive"
        }`}
      >
        <span
          id="close_login_register"
          onClick={() => {
            this.onClickResetLoginRegister();
          }}
          className={`z-20 duration-500 cursor-pointer px-4 rounded-br-full text-2xl`}
        >
          {"Close "}
          <i className={`nav-open duration-150 fa fa-times lg`}></i>
        </span>
        <div id="LoginRegister_forms" className={`text-white flex`}>
          <LoginForm
            className={`${
              this.props.authForm === "login" ? "" : "invisible order-2"
            } duration-500`}
          ></LoginForm>
          <RegisterForm
            className={`${
              this.props.authForm === "register" ? "" : "invisible order-2"
            } duration-500`}
          ></RegisterForm>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  turn: state.navTwist.turn,
  authForm: state.loginRegister.authForm,
});

export default connect(mapStateToProps, {
  toggle2Login,
  toggle2Register,
  resetLoginRegister,
})(LoginRegister);

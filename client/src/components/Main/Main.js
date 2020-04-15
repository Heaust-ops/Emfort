import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTurn } from "../../actions/turnActions";
import {
  toggle2Login,
  toggle2Register,
  resetLoginRegister,
} from "../../actions/loginRegisterActions";
import Home from "../Home/Home";
import "./Main.css";

export class Main extends Component {
  onClickToggleTurn = () => {
    if (this.props.turn) this.props.toggleTurn();
  };

  onClickResetLoginRegister = () => {
    if (this.props.authForm) this.props.resetLoginRegister();
  };

  render() {
    return (
      <div
        id="Main"
        onClick={() => {
          this.onClickToggleTurn();
          this.onClickResetLoginRegister();
        }}
        style={this.props.style}
        className={`${this.props.authForm ? 'login_register_active' : ''} origin-top-left text-center overflow-y-auto duration-500 text-white transform ${this.props.turn}`}
      >
        <Home className=""></Home>
      </div>
    );
  }
}

Main.propTypes = {
  toggleTurn: PropTypes.func.isRequired,
  toggle2Login: PropTypes.func.isRequired,
  toggle2Register: PropTypes.func.isRequired,
  resetLoginRegister: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired,
  authForm: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  turn: state.navTwist.turn,
  authForm: state.loginRegister.authForm,
});

export default connect(mapStateToProps, {
  toggleTurn,
  toggle2Login,
  toggle2Register,
  resetLoginRegister,
})(Main);

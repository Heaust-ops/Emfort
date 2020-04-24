import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export class TitleHandler extends Component {
  static propTypes = {
    turn: PropTypes.string.isRequired,
    authForm: PropTypes.string.isRequired,
  };

  toTitleCase = (txt) => {
    return txt.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{"Emfort - Home"}</title>
        </Helmet>
        {this.props.turn ? (
          <Helmet>
            <title>{"Navigate <- Emfort"}</title>
          </Helmet>
        ) : null}
        {this.props.authForm ? (
          <Helmet>
            <title>
              {this.toTitleCase(this.props.authForm) + " <- Emfort"}
            </title>
          </Helmet>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  turn: state.navTwist.turn,
  authForm: state.loginRegister.authForm,
});

export default connect(mapStateToProps)(TitleHandler);

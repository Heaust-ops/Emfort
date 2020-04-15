import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer
        id="Footer"
        className={`${this.props.authForm ? 'login_register_active' : ''} ${this.props.className} text-sm absolute bottom-0 inset-x-0 hidden sm:block duration-300 hover:opacity-0`}
      >
        <div
          id="footer"
          className="bg-gray-700 tracking-widest text-center fixed bottom-0 right-0 left-0 text-gray-800"
        >
          <div className="text-center m-1">
            Copyright (C) 2007 Free Software Foundation
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  authForm: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authForm: state.loginRegister.authForm,
});

export default connect(mapStateToProps)(Footer);

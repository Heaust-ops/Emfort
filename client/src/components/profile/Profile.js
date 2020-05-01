import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Profile.css";

export class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className={`${this.props.className} text-white w-screen h-screen`}>
        <div
          className="flex justify-between absolute left-1/2 border-solid border-4 p-8 rounded border-white"
          style={{
            width: "80%",
            transform: "translate(-50%, -50%)",
            top: "25%",
          }}
        >
          <img
            src={this.props.user.displayPicture}
            className="w-40 h-40 p-1 ml-8 border-solid border-4 border-white"
            style={{ borderRadius: "50%" }}
          ></img>
          <h1 className="tracking-widest m-0 p-2 text-3xl">
            @{this.props.user.username}
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(Profile);

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "../../actions/turnActions";

export class Main extends Component {
  render() {
    return (
      <main
        className={`origin-top-left mt-8 text-center overflow-y-auto overflow-hidden duration-500 text-white h-100vh w-100vw transform ${this.props.turn}`}
      >
        <p>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet
        </p>
        <p>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet
        </p>
        <p>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet
        </p>
        <p>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet
        </p>
        <p>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet
        </p>
        <p>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet
        </p>
      </main>
    );
  }
}

Main.propTypes = {
  getItems: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  turn: state.navTwist.turn
});

export default connect(mapStateToProps, { getItems })(Main);

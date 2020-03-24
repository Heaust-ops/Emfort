import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "../../actions/turnActions";

export class Main extends Component {
  render() {
    return (
      <div
      style={this.props.style}
        className={`origin-top-left mt-8 text-center overflow-y-auto duration-500 text-white transform ${this.props.turn}`}
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
      </div>
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

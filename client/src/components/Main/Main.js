import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems, toggleTurn } from "../../actions/turnActions";
import Home from '../Home/Home';

export class Main extends Component {

  onClickToggleTurn = () => {
    if (this.props.turn) this.props.toggleTurn();
  }

  render() {
    return (
      <div
      onClick={this.onClickToggleTurn}
      style={this.props.style}
        className={`origin-top-left mt-8 text-center overflow-y-auto duration-500 text-white transform ${this.props.turn}`}
      >

        <Home className='mt-10'></Home>
        
      </div>
    );
  }
}

Main.propTypes = {
  getItems: PropTypes.func.isRequired,
  toggleTurn: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  turn: state.navTwist.turn
});

export default connect(mapStateToProps, {getItems, toggleTurn })(Main);

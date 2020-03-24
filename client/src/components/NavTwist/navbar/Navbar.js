import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems, toggleTurn } from '../../../actions/turnActions';
export class Navbar extends Component {
 

  componentDidMount() {
    this.props.getItems();
  }

  onClickToggleTurn = () => {
    this.props.toggleTurn();
  }

  render() {
    
    return (
      <React.Fragment>
          
        <span onClick={this.onClickToggleTurn} className={`duration-150 bg-gray-700 hover:bg-gray-900 hover:text-gray-200 hover:font-black p-3 rounded-b-full rounded-r-full text-gray-400 text-2xl`}>
          <i className="nav-open fa fa-bars lg"></i>
          <i className="hidden nav-open fa fa-times lg"></i>
        </span>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  getItems: PropTypes.func.isRequired,
  toggleTurn: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  turn: state.navTwist.turn
})

export default connect(mapStateToProps, {getItems, toggleTurn})(Navbar);

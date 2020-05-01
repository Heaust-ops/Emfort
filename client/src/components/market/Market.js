import React, { Component } from "react";
import "./Market.css";

export class Market extends Component {
  render() {
    return (
      <div className={`${this.props.className} text-white`}>Market page</div>
    );
  }
}

export default Market;

import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <div className={`${this.props.className} text-white`}>Contact page</div>
    );
  }
}

export default Contact;

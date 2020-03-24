import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
        <footer className={`text-sm absolute bottom-0 inset-x-0 hidden sm:block duration-300 hover:opacity-0`}>
          <div id="footer" className="bg-gray-700 tracking-widest text-center fixed bottom-0 right-0 left-0 text-gray-800">
            <div className="text-center m-1"> © 2020 Emfort. All Rights Reserved</div>
          </div>
        </footer>
    );
  }
}

export default Footer;

import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div id="footer" className="bg-gray-700 tracking-widest text-center fixed bottom-0 right-0 left-0 hover:bg-gray-600 text-gray-800">
            <div className="text-center m-1"> © 2020 Emfort. All Rights Reserved</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

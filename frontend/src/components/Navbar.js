import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div className="bg-gray-700">
        <header>
          <div className="flex justify-between" id="header">
            <img
              className="px-2 h-12 flex-initial"
              src="https://emberjs.com/images/brand/ember_E-Icon-1c-White-Rounded-Rectangle.png"
              alt="Company logo"
            ></img>

            
            <div className="flex flex-initial" id="login_register_team">

            <div className="flex px-3 flex-initial" id="search_bar">
              <input
                className="hidden mt-auto mb-auto rounded h-8 flex-initial form-control has-search"
                type="text"
              />
              <a className="px-2 py-auto mt-auto mb-auto flex-initial text-2xl">
                <i class="fa fa-search"></i>
              </a>
            </div>

              <button className="px-2 flex-initial hover:bg-blue-400">
                Login | Register
              </button>
              <button className="px-2 flex-initial hover:bg-blue-400">
                Team
              </button>
              <a className="px-2 flex-initial hover:bg-blue-400 text-3xl">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;

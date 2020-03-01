import React, { Component } from "react";
import SearchBar from "./searchbar/SearchBar";

export class Navbar extends Component {
  render() {
    return (
      <div className="bg-gray-700">
        <header>
          <div className="flex justify-between" id="header">
            <img
              className="px-3 h-12 flex-initial rounded-full"
              src="https://emberjs.com/images/brand/ember_E-Icon-1c-White-Rounded-Rectangle.png"
              alt="Company logo"
            ></img>

            <div className="flex flex-initial" id="login_register_team">
              <SearchBar></SearchBar>

              <button className="px-3 flex-initial hover:bg-blue-400">
                Login | Register
              </button>
              <button className="px-3 flex-initial hover:bg-blue-400">
                Team
              </button>
              <a className="px-2 cursor-pointer flex-initial hover:bg-blue-400 text-3xl">
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

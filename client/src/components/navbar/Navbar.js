import React, { Component } from "react";
import SearchBar from "./searchbar/SearchBar";

export class Navbar extends Component {
  
  state = {
    isOpen: false,
    display: ''
  }

  display_change = () => {
    if (this.state.isOpen) {
      this.setState({
        display: ''
      });
    } else
    this.setState({
      display: 'hidden'
    });
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.display_change();
  }



  render() {
    return (
      <div className="bg-gray-700">
        <header>
          <div className="flex flex-col lg:flex-row justify-between" id="header">
            <img
              className="px-3 h-12 hidden lg:block flex-initial rounded-full"
              src="https://emberjs.com/images/brand/ember_E-Icon-1c-White-Rounded-Rectangle.png"
              alt="Company logo"
            ></img>
            <div className="flex md:hidden p-0 mx-auto"><SearchBar></SearchBar><a onClick={this.toggle} className="my-auto md:hidden float-left"><i className="fa fa-bars"></i></a></div>
            <div className={`${this.state.display} justify-between flex flex-col md:flex-row flex-initial`} id="login_register_team">
              <div className="flex float-left md:float-none hidden md:block"><SearchBar></SearchBar></div>
              <button className="px-3 md:ml-auto py-3 pt-4 lg:py-0 flex-initial hover:bg-blue-400">
                Login | Register
              </button>
              <button className="px-3 py-3 lg:py-0 flex-initial hover:bg-blue-400">
                Team
              </button>
              <a className="px-2 py-1 lg:py-0 text-center cursor-pointer flex-initial hover:bg-blue-400 text-3xl">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;

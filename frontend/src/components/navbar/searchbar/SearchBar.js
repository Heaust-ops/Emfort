import React, { Component } from "react";
import './SearchBar.css';

export class SearchBar extends Component {
  render() {
    return (
      <div className="px-3 mt-1">
        <div className="bg-gray-600 h-10 rounded-full -translate-x-1/2 translate-y-12 " id="search_bar">
          <input
            className="border-none float-left w-0 bg-transparent leading-10 outline-none duration-500 p-0 m-0"
            placeholder="Search for Something!"
            type="text"
          />
          <a className="bg-gray-600 cursor-pointer hover:bg-gray-400 duration-200 w-10 h-10 rounded-full flex justify-center items-center">
            <i class="fa fa-search"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;

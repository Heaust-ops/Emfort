import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMarket } from "../../../actions/searchMarketActions";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  return (
    <div className="pr-20 pl-4">
      <div
        className="bg-gray-700 h-10 rounded-full -translate-x-1/2 translate-y-12 "
        id="search_bar"
      >
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="border-none text-left float-left w-0 bg-transparent leading-10 outline-none duration-500 p-0 m-0"
          placeholder="Search for Something!"
          type="text"
        />
        <button
          onClick={() => dispatch(searchMarket(query))}
          className="bg-gray-600 cursor-pointer float-none hover:bg-gray-500 duration-200 w-10 h-10 rounded-full flex justify-center items-center"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

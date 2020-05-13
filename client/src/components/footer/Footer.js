import React from "react";
import { useSelector } from "react-redux";
import "./Footer.css";

const Footer = (props) => {
  const authForm = useSelector((state) => state.loginRegister.authForm);
  return (
    <footer
      id="Footer"
      className={`${authForm ? "login_register_active" : ""} ${
        props.className
      } text-sm absolute bottom-0 inset-x-0 hidden sm:block duration-300 hover:opacity-0`}
    >
      <div
        id="footer"
        className="bg-gray-700 tracking-widest text-center fixed bottom-0 right-0 left-0 text-gray-800"
      >
        <div className="text-center m-1">
          Copyright (C) 2007 Free Software Foundation
        </div>
      </div>
    </footer>
  );
};

export default Footer;

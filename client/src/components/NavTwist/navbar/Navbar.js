import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTurn } from "../../../actions/turnActions";
import { pageTo } from "../../../actions/miscActions";
import { logout } from "../../../actions/authActions";
import {
  toggle2Login,
  toggle2Register,
  resetLoginRegister,
} from "../../../actions/loginRegisterActions";
import {
  PAGETO_HOME,
  PAGETO_CONTACT,
  PAGETO_PROFILE,
  //  PAGETO_MARKET,
} from "../../../actions/types";
import "./Navbar.css";
import SearchBar from "../searchbar/SearchBar";

const Navbar = (props) => {
  const turn = useSelector((state) => state.navTwist.turn);
  const authForm = useSelector((state) => state.loginRegister.authForm);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const onClickToggleTurn = () => {
    dispatch(toggleTurn());
  };

  const onClickTurnClose = () => {
    if (turn) dispatch(toggleTurn());
  };

  const onClickToggle2Login = () => {
    dispatch(toggle2Login());
  };

  const onClickToggle2Register = () => {
    dispatch(toggle2Register());
  };

  const onClickResetLoginRegister = () => {
    if (authForm) dispatch(resetLoginRegister());
  };

  return (
    <>
      <span
        onClick={() => {
          onClickToggleTurn();
          onClickResetLoginRegister();
        }}
        className={`z-50 block cursor-pointer top-0 left-0 fixed duration-150 bg-gray-700 hover:bg-gray-900 hover:text-gray-200 hover:font-black pr-5 pb-5 pl-2 pt-2 rounded-br-full text-gray-400 text-2xl`}
      >
        <i
          className={`${
            turn ? "hidden" : ""
          } nav-open duration-150 fa fa-bars lg`}
        ></i>
        <i
          className={`${
            turn ? "" : "hidden"
          } nav-open duration-150 fa fa-times lg`}
        ></i>
      </span>

      <ul
        style={{ left: "5 em", bottom: "0" }}
        className={`transform ${
          turn ? "" : "-translate-x-64"
        } py-3 fixed text-white duration-500 m-0 p-0 list-none`}
      >
        <li className={`pb-5 pl-4 ${`hover:rotate-30 duration-200`}`}>
          <button
            className={`hover:text-red-600`}
            onClick={() => {
              dispatch(pageTo(PAGETO_HOME));
              onClickTurnClose();
            }}
          >
            <i className="fa fa-home fa-2x"></i> Home
          </button>
        </li>
        {isAuthenticated &&
        (user.authority === "atom" || user.authority === "merchant") ? (
          <li className="pb-5 pl-4">
            <button className={`hover:text-red-600`}>
              <i className="fa fa-money fa-2x"></i> Assets
            </button>
          </li>
        ) : null}
        {isAuthenticated ? (
          <>
            <li className="pb-5 pl-4">
              <button
                className={`hover:text-red-600`}
                onClick={() => {
                  dispatch(pageTo(PAGETO_PROFILE));
                  onClickTurnClose();
                }}
              >
                <i className="fa fa-user fa-2x"></i> Profile
              </button>
            </li>
            <li className="pb-5 pl-4">
              <button
                onClick={() => {
                  dispatch(pageTo(PAGETO_HOME));
                  dispatch(logout());
                  onClickTurnClose();
                }}
                className={`hover:text-red-600`}
              >
                <i className="fa fa-sign-out fa-2x"></i> Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="pb-5 pl-4">
              <button
                onClick={() => {
                  onClickToggle2Login();
                  onClickTurnClose();
                }}
                className={`hover:text-red-600`}
              >
                <i className="fa fa-sign-in fa-2x"></i> Login
              </button>
            </li>
            <li className="pb-5 pl-4">
              <button
                onClick={() => {
                  onClickToggle2Register();
                  onClickTurnClose();
                }}
                className={`hover:text-red-600`}
              >
                <i className="fa fa-user-plus fa-2x"></i> Register
              </button>
            </li>
          </>
        )}

        <li className="pb-5 pl-4">
          <button
            className={`hover:text-red-600`}
            onClick={() => {
              dispatch(pageTo(PAGETO_CONTACT));
              onClickTurnClose();
            }}
          >
            <i className="fa fa-envelope-open fa-2x"></i> Contact Us
          </button>
        </li>
        <li className="mb-20 pb-5 pl-5 srch">
          <span>
            <SearchBar></SearchBar>
          </span>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

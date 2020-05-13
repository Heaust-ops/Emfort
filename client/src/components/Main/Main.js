import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTurn } from "../../actions/turnActions";
import { resetLoginRegister } from "../../actions/loginRegisterActions";
import Home from "../Home/Home";
import Contact from "../contact/Contact";
import Market from "../market/Market";
import Profile from "../profile/Profile";
import "./Main.css";

const Main = (props) => {
  const turn = useSelector((state) => state.navTwist.turn);
  const authForm = useSelector((state) => state.loginRegister.authForm);
  const page = useSelector((state) => state.misc.page);
  const dispatch = useDispatch();

  const onClickToggleTurn = () => {
    if (turn) dispatch(toggleTurn());
  };

  const onClickResetLoginRegister = () => {
    if (authForm) dispatch(resetLoginRegister());
  };

  return (
    <div
      id="Main"
      onClick={() => {
        onClickToggleTurn();
        onClickResetLoginRegister();
      }}
      style={props.style}
      className={`${
        authForm ? "login_register_active" : ""
      } origin-top-left text-center overflow-hidden duration-500 text-white transform ${turn}`}
    >
      {
        {
          home: (
            <Home
              className={`${authForm || turn ? "pointer-events-none" : ""}`}
            ></Home>
          ),
          profile: <Profile className=""></Profile>,
          contact: <Contact className=""></Contact>,
          market: <Market className=""></Market>,
        }[page]
      }
    </div>
  );
};

export default Main;

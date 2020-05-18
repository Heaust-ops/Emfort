import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTurn } from "../../actions/turnActions";
import { resetLoginRegister } from "../../actions/loginRegisterActions";
import Home from "../Home/Home";
import Contact from "../contact/Contact";
import Market from "../market/Market";
import Profile from "../profile/Profile";
import Assets from "../Assets/Assets";
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
      style={
        page === "assets"
          ? {}
          : {
              height: `${
                {
                  home: "200%",
                  profile: "100%",
                  contact: "100%",
                  market: "100%",
                }[page]
              }`,
            }
      }
      className={`${
        authForm ? "login_register_active" : ""
      } origin-top-left text-center duration-500 text-white transform ${turn}`}
    >
      {
        {
          home: <Home className={`${turn ? "pointer-events-none" : ""}`} />,
          profile: (
            <Profile className={`${turn ? "pointer-events-none" : ""}`} />
          ),
          contact: (
            <Contact className={`${turn ? "pointer-events-none" : ""}`} />
          ),
          market: <Market className={`${turn ? "pointer-events-none" : ""}`} />,
          assets: <Assets className={`${turn ? "pointer-events-none" : ""}`} />,
        }[page]
      }
    </div>
  );
};

export default Main;

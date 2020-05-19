import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import { resetLoginRegister } from "../../actions/loginRegisterActions";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import "./LoginRegister.css";

const LoginRegister = (props) => {
  const authForm = useSelector((state) => state.loginRegister.authForm);
  const dispatch = useDispatch();

  const toggleForm = useSpring({
    transform: authForm
      ? "translate(20%, 0) skewX(-8deg)"
      : "translate(130%, 0) skewX(-8deg)",
  });

  const onClickResetLoginRegister = () => {
    if (authForm) dispatch(resetLoginRegister());
  };

  return (
    <animated.div
      id="LoginRegister"
      className={`${props.className}`}
      style={toggleForm}
    >
      <span
        id="close_login_register"
        onClick={() => {
          onClickResetLoginRegister();
        }}
        className={`z-20 duration-500 cursor-pointer px-4 rounded-br-full text-2xl`}
      >
        {"Close "}
        <i className={`nav-open duration-150 fa fa-times lg`} />
      </span>
      <div id="LoginRegister_forms" className={`text-white flex`}>
        <LoginForm
          className={`${
            authForm === "login" ? "" : "invisible order-2"
          } duration-500`}
        />
        <RegisterForm
          className={`${
            authForm === "register" ? "" : "invisible order-2"
          } duration-500`}
        />
      </div>
    </animated.div>
  );
};

export default LoginRegister;

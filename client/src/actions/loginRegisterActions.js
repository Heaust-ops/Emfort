import {
    TOGGLE2LOGIN,
    TOGGLE2REGISTER,
    RESET_LOGIN_REGISTER,
  } from "./types";

export const toggle2Login = () => {
    return {
      type: TOGGLE2LOGIN,
    };
  };
  
  export const toggle2Register = () => {
    return {
      type: TOGGLE2REGISTER,
    };
  };
  
  export const resetLoginRegister = () => {
    return {
      type: RESET_LOGIN_REGISTER,
    };
  };
  
import {
  TOGGLE2LOGIN,
  TOGGLE2REGISTER,
  RESET_LOGIN_REGISTER,
} from "../actions/types";

const initialState = {
  authForm: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE2LOGIN:
      state.authForm = "login";
      return { ...state };
    case TOGGLE2REGISTER:
      state.authForm = "register";
      return { ...state };
    case RESET_LOGIN_REGISTER:
      state.authForm = "";
      return { ...state };
    default:
      return state;
  }
}

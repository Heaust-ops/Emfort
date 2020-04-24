import { combineReducers } from "redux";
import navTwistReducer from "./navTwistReducer";
import loginRegisterReducer from "./loginRegisterReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  navTwist: navTwistReducer,
  loginRegister: loginRegisterReducer,
  error: errorReducer,
  auth: authReducer,
});

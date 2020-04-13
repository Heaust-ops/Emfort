import {combineReducers} from 'redux';
import navTwistReducer from './navTwistReducer';
import loginRegisterReducer from './loginRegisterReducer';

export default combineReducers({
    navTwist: navTwistReducer,
    loginRegister: loginRegisterReducer
});
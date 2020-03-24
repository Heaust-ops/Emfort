import {combineReducers} from 'redux';
import navTwistReducer from './navTwistReducer';

export default combineReducers({
    navTwist: navTwistReducer
});
import {
  TOGGLE_FULLSCREEN,
  PAGETO_HOME,
  PAGETO_CONTACT,
  PAGETO_PROFILE,
  PAGETO_MARKET,
  PAGETO_ASSETS,
} from "../actions/types";

const initialState = {
  fullScreen: false,
  page: "home",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FULLSCREEN:
      state.fullScreen = !state.fullScreen;
      return { ...state };
    case PAGETO_HOME:
      state.page = "home";
      return { ...state };
    case PAGETO_CONTACT:
      state.page = "contact";
      return { ...state };
    case PAGETO_PROFILE:
      state.page = "profile";
      return { ...state };
    case PAGETO_MARKET:
      state.page = "market";
      return { ...state };
    case PAGETO_ASSETS:
      state.page = "assets";
      return { ...state };
    default:
      return state;
  }
}

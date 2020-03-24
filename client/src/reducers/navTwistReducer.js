import { GET_ITEMS, TOGGLE_TURN } from "../actions/types";

const initialState = {
  turn: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };
    case TOGGLE_TURN:
      if (!state.turn) {
        state.turn = "-rotate-30";
      } else {
        state.turn = "";
      }
      return { ...state };
    default:
      return state;
  }
}

import { SEARCH_MARKET, QUERY_LOADING } from "../actions/types";

const initialState = {
  query: null,
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case QUERY_LOADING:
      state.isLoading = true;
      return { ...state };
    case SEARCH_MARKET:
      state.query = action.payload;
      state.isLoading = false;
      state.error = action.error;
      return { ...state };
    default:
      return state;
  }
}

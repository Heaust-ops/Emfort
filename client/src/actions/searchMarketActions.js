import { SEARCH_MARKET, QUERY_LOADING } from "../actions/types";
import { PAGETO_MARKET } from "../actions/types";
import axios from "axios";

export const searchMarket = (query) => (dispatch) => {
  dispatch({ type: QUERY_LOADING });
  axios
    .get("api/assets/search/" + query)
    .then((res) => {
      dispatch({ type: PAGETO_MARKET });
      dispatch({ type: SEARCH_MARKET, payload: res.data, error: null });
    })
    .catch((err) => {
      dispatch({ type: SEARCH_MARKET, payload: null, error: err });
    });
};

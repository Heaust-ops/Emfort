import {
  TOGGLE_TURN,
} from "./types";

export const toggleTurn = () => {
  return {
    type: TOGGLE_TURN,
  };
};
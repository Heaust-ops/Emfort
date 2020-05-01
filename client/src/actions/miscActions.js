import { TOGGLE_FULLSCREEN } from "./types";

export const toggle_fullscreen = () => {
  return {
    type: TOGGLE_FULLSCREEN,
  };
};

export const pageTo = (type) => {
  return {
    type,
  };
};

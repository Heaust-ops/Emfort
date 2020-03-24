import { GET_ITEMS, TOGGLE_TURN } from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};

export const toggleTurn = () => {
    return {
        type: TOGGLE_TURN
    };
};
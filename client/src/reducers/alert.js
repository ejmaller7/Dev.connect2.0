import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;
    
    switch(type) {
        // Setting the alert, by adding the alert to the array (Comes from the actions file)
        case SET_ALERT:
            return [...state, payload];
        // Removing the alert by filtering the alert on the ID (Comes from the actions file)
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
};
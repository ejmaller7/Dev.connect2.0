import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuidv4();
    
    // Displays the alert message, type of alert and the ID
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    // Removes the alert after 5 seconds
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
};
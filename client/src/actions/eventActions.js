import axios from "axios";

import { GET_ERRORS } from "./types";

// Create Event

export const createEvent = (eventData, history) => dispatch => {
  axios
    .post("../api/events/create", eventData)
    .then(res => history.push("/dashboard"))
    .catch(
      err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        }),
      history.push("/create")
    );
};
/**/

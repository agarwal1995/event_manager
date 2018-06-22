import { GET_ERRORS } from "../actions/types";
import { GET_EVENT } from "../actions/types";
import { START_SEARCH } from "../actions/types";
import { END_SEARCH } from "../actions/types";

const initialState = {
  isFetching: false,
  event: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_SEARCH:
      return {
        isFetching: true
      };
    case END_SEARCH:
      return {
        ...state,
        isFetching: true,
        //event: action.event,
        event: [action.payload.data]
      };
    case GET_EVENT:
      // console.log(action);
      return [action.payload.data, ...state];
    case GET_ERRORS:
      return {
        ...state,
        event: [action]
      };
    default:
      return {
        ...state,
        event: action.payload
      };
  }
}

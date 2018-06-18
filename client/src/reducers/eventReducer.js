import { GET_ERRORS } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  event: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        event: action.payload
      };
    default:
      return state;
  }
}

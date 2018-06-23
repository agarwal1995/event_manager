import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register User

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(
      err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      //history.push("/")
    );
};

// Login User

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Save to Local Storage
      const { token } = res.data;
      //Set Token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth Header
      setAuthToken(token);

      //Decode Token to get User Data
      const decoded = jwt_decode(token);

      // Set Current User

      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set Logged in User

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log out User

export const logoutUser = () => dispatch => {
  //Remove Token from LocalStorage
  localStorage.removeItem("jwtToken");

  //Remove auth header for future requests
  setAuthToken(false);

  dispatch(setCurrentUser({}));
};

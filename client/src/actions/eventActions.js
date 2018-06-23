import axios from "axios";

import { GET_ERRORS, GET_EVENT } from "./types";

const payload = null;

// Create Event

export const createEvent = (eventData, history) => dispatch => {
  axios
    .post("../api/events/create", eventData)
    .then(res => history.push("/dashboard"))
    .catch(
      err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      // history.push("/create")
    );
};
/**/

export const updateEvent = (eventData, history) => dispatch => {
  axios
    .post("../api/events/update/", eventData)
    .then(res => history.push("/dashboard"))
    .catch(
      err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      //history.push("/update")
    );
};

export const readEvent = () => dispatch => {
  axios
    .get("../api/events/")
    .then(res =>
      dispatch({
        type: GET_EVENT,
        event: res
      })
    )
    .catch(
      err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        }),
      console.log(payload)
    );
};

export const fetchDev = () => {
  const url = "../api/events/";
  return dispatch => {
    dispatch(startSearch());
    return axios.get(url).then(
      response => {
        const event = response.data;
        dispatch(endSearch(event));
      },
      err => {
        console.log("tyjjyhhg");
      }
    );
  };
};

export let startSearch = () => {
  return {
    type: "Start_Search"
  };
};

export let endSearch = event => {
  return {
    type: "End_Search",
    event
  };
};

/*
router.post("/singleread", (req, res) => {
  Event.findOne({ id: req.body.id })
    .then(event => {
      if (!event) {
        return res.status(404).json({ id: " Event Id Does not Exist" });
      } else {
        res.json(event);
      }
    })
    .catch(err => res.status(404).json({ noeventfound: " Event Not Found" }));
});


router.post("/update", (req, res) => {
  Event.findOne({ id: req.body.id }).then(event => {
    if (!event) {
      return res.status(404).json({ id: " Event Id Does not Exist" });
    } else {
      Event.findOneAndUpdate(
        { id: req.body.id },
        {
          $set: {
            eventname: req.body.eventname,
            location: req.body.location,
            date: req.body.date,
            description: req.body.description
          }
        },
        { new: true }
      ).then(event => res.json(event));
    }
  });
});
*/

//Get Events

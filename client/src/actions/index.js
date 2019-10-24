import axios from "axios";
import { FETCH_EVENTS } from "./types";

export const submitEvent = (values, history) => async dispatch => {
  const res = await axios.post("/api/events", values);

  history.push("/");
  dispatch({ type: null, payload: res.data });
};

export const fetchEvents = () => async dispatch => {
  const res = await axios.get("/api/events");
  dispatch({ type: FETCH_EVENTS, payload: res.data });
};

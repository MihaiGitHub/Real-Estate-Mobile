import { AGENTS_FETCH_SUCCESS, AGENT_FETCH_SUCCESS } from "./types";
import axios from "axios";
import GLOBALS from "../components/common/Globals";

export const agentsFetch = () => {
  return (dispatch) => {
    axios
      .get(`${GLOBALS.BASE_URL}/agents`)
      .then((response) => {
        dispatch({
          type: AGENTS_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const agentFetch = (id) => {
  return (dispatch) => {
    axios
      .get(`${GLOBALS.BASE_URL}/agent/${id}`)
      .then((response) => {
        dispatch({
          type: AGENT_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const saveMessage = (id, msg) => {
  return axios
    .post(`${GLOBALS.BASE_URL}/agent/${id}/message`, {
      uid: id,
      message: msg,
    })
    .then((response) => response)
    .catch(function (error) {
      console.log(error);
    });
};

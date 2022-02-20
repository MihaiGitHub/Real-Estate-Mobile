import { AGENTS_FETCH_SUCCESS, AGENT_FETCH_SUCCESS } from "./types";
import AgentsService from "../services/AgentsService";

export const agentsFetch = () => async (dispatch) => {
  try {
    const res = await AgentsService.getAgents();

    dispatch({
      type: AGENTS_FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("error ", err);
  }
};

export const findAgentById = (id) => async (dispatch) => {
  try {
    const res = await AgentsService.getAgentById(id);

    dispatch({
      type: AGENT_FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const saveMessage = async (id, msg) => {
  try {
    const res = await AgentsService.saveMessage(id, msg);
  } catch (err) {
    console.log(err);
  }
};

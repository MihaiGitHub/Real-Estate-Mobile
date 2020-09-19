import { AGENTS_FETCH_SUCCESS, AGENT_FETCH_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  agents: [],
  agent: {},
  loading: true,
  loadingAgent: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AGENTS_FETCH_SUCCESS:
      // Will send to app state in combineReducers as state.agents
      return { ...state, list: action.payload, loading: false };
    case AGENT_FETCH_SUCCESS:
      return { ...state, agent: action.payload, loadingAgent: false };
    default:
      return state;
  }
};

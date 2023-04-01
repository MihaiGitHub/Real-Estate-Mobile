import {
  AGENTS_FETCH_SUCCESS,
  AGENT_FETCH_SUCCESS,
  AGENTS_FILTERED,
} from "../actions/types";

const INITIAL_STATE = {
  agent: {},
  loading: true,
  loadingAgent: true,
  filtered: false,
  agentsFiltered: [],
  agentsDB: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AGENTS_FETCH_SUCCESS:
      return { ...state, agentsDB: action.payload, loading: false };
    case AGENT_FETCH_SUCCESS:
      return { ...state, agent: action.payload, loadingAgent: false };
    case AGENTS_FILTERED:
      return {
        ...state,
        agentsFiltered: action.payload,
        loading: false,
        filtered: true,
        agentsDB: [],
      };
    default:
      return state;
  }
};

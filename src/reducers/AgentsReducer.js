import {
    AGENTS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    agents: [],
    loading: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case AGENTS_FETCH_SUCCESS:
            // Will send to app state in combineReducers as state.agents
            return { ...state, list: action.payload, loading: false };
        default:
            return state;
    }
};
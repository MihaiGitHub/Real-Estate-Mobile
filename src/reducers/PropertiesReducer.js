import {
    PROPERTIES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    list: [],
    loading: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case PROPERTIES_FETCH_SUCCESS:
            // Will send to app state in combineReducers as state.properties
            return { ...state, list: action.payload, loading: false }
        default:
            return state;
    }
};
import {
    PROPERTIES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    properties: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case PROPERTIES_FETCH_SUCCESS:
            // Will send to app state in combineReducers as state.properties
            return action.payload;
        default:
            return state;
    }
};
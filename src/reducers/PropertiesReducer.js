import {
    PROPERTIES_FETCH_SUCCESS, PROPERTIES_FILTERED, PROPERTY_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    list: [],
    listFiltered: [],
    property: {},
    loading: true,
    loadingProperty: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case PROPERTIES_FILTERED:
            // Will send to app state in combineReducers as state.listFiltered
            return { ...state, listFiltered: action.payload, loading: false }
        case PROPERTIES_FETCH_SUCCESS:
            // Will send to app state in combineReducers as state.properties
            return { ...state, list: action.payload, listFiltered: action.payload, loading: false }
        case PROPERTY_FETCH_SUCCESS:
                return { ...state, property: action.payload, loadingProperty: false }
        default:
            return state;
    }
};
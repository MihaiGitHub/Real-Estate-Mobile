import {
  PROPERTIES_FETCH_SUCCESS,
  PROPERTIES_FILTERED,
  PROPERTY_FETCH_SUCCESS,
  UPDATE_SEARCH_TERM,
} from "../actions/types";

const INITIAL_STATE = {
  list: [],
  listFiltered: [],
  propertyId: "",
  loading: true,
  loadingProperty: true,
  searchTerm: "Search",
  filtered: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROPERTIES_FILTERED:
      // Will send to app state in combineReducers as state.listFiltered
      return {
        ...state,
        listFiltered: action.payload,
        loading: false,
        filtered: true,
      };
    case PROPERTIES_FETCH_SUCCESS:
      // Will send to app state in combineReducers as state.properties
      return {
        ...state,
        list: action.payload,
        listFiltered: action.payload,
        loading: false,
      };
    case PROPERTY_FETCH_SUCCESS:
      return { ...state, propertyId: action.payload, loadingProperty: false };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

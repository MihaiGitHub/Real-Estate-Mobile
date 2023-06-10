import {
  PROPERTIES_FETCH_SUCCESS,
  PROPERTIES_FILTERED,
  PROPERTY_FETCH_SUCCESS,
  UPDATE_SEARCH_TERM,
  PROPERTIES_ZILLOW,
  SEARCH_LAT_LNG,
} from "../actions/types";

const INITIAL_STATE = {
  list: [],
  listFiltered: [],
  propertiesZillow: [],
  propertyId: "",
  loading: true,
  loadingProperty: true,
  searchTerm: "Search",
  searchLatLng: {},
  filtered: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROPERTIES_FILTERED:
      return {
        ...state,
        listFiltered: action.payload,
        loading: false,
        filtered: true,
      };
    case PROPERTIES_FETCH_SUCCESS:
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
    case PROPERTIES_ZILLOW:
      return { ...state, propertiesZillow: action.payload, listFiltered: [] };
    case SEARCH_LAT_LNG:
      return { ...state, searchLatLng: action.payload };
    default:
      return state;
  }
};

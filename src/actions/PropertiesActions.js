import {
  PROPERTIES_FETCH_SUCCESS,
  PROPERTIES_FILTERED,
  PROPERTY_FETCH_SUCCESS,
  UPDATE_SEARCH_TERM,
} from "./types";
import axios from "axios";
import GLOBALS from "../components/common/Globals";

export const propertiesFetch = () => {
  return (dispatch) => {
    axios
      .get(`${GLOBALS.BASE_URL}/properties`)
      .then((response) => {
        dispatch({
          type: PROPERTIES_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const propertyFetch = (id) => {
  return {
    type: PROPERTY_FETCH_SUCCESS,
    payload: id,
  };
};

export const propertiesFiltered = (lat, lng) => {
  return (dispatch) => {
    // Return promise to use async await in PropertySearch
    return axios
      .get(`${GLOBALS.BASE_URL}/search/properties?lat=${lat}&lng=${lng}`)
      .then((response) => {
        dispatch({
          type: PROPERTIES_FILTERED,
          payload: response.data.results,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const udpateSearchTerm = (searchTerm) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SEARCH_TERM,
      payload: searchTerm,
    });
  };
};

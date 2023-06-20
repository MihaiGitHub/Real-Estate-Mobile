import {
  PROPERTIES_FETCH_SUCCESS,
  PROPERTIES_FILTERED,
  PROPERTY_FETCH_SUCCESS,
  UPDATE_SEARCH_TERM,
  PROPERTIES_USREALESTATE,
  PROPERTY_USREALESTATE,
  SEARCH_LAT_LNG,
} from "./types";
import PropertiesService from "../services/PropertiesService";

export const propertiesFetch = () => async (dispatch) => {
  try {
    const res = await PropertiesService.getProperties();

    dispatch({
      type: PROPERTIES_FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findPropertyById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROPERTY_FETCH_SUCCESS,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const propertiesFiltered = (lat, lng) => async (dispatch) => {
  try {
    const res = await PropertiesService.getPropertiesFiltered(lat, lng);

    dispatch({
      type: SEARCH_LAT_LNG,
      payload: { lat, lng },
    });

    dispatch({
      type: PROPERTIES_FILTERED,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const udpateSearchTerm = (searchTerm) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_SEARCH_TERM,
      payload: searchTerm,
    });
  } catch (err) {
    console.log(err);
  }
};

export const propertiesUSRealEstate = (state, city) => async (dispatch) => {
  try {
    const res = await PropertiesService.getPropertiesUSRealEstate(state, city);

    dispatch({
      type: PROPERTIES_USREALESTATE,
      payload: res.data?.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const propertyUSRealEstateFetch = (zpid) => async (dispatch) => {
  try {
    const res = await PropertiesService.getPropertyZillow(zpid);

    console.log("getPropertyUSRealEstate ", res);

    dispatch({
      type: PROPERTY_USREALESTATE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

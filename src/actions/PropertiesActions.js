import {
    PROPERTIES_FETCH_SUCCESS, 
    PROPERTIES_FILTERED, 
    PROPERTY_FETCH_SUCCESS,
    UPDATE_SEARCH_TERM
} from './types';
import axios from 'axios';
import GLOBALS from '../components/common/Globals';

export const propertiesFetch = () => {
    var bodyFormData = new FormData();
    bodyFormData.append('data', 'all');

    return (dispatch) => {
        axios({
            method: 'post',
            url: `${GLOBALS.BASE_URL}/properties.php`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => {
                dispatch({ 
                    type: PROPERTIES_FETCH_SUCCESS,
                    payload: response.data.property
                })
            })
            .catch(function (response) {
                console.log(response);
            }); 
    }
}

export const propertyFetch = (id) => {
    return (dispatch) => {      
        axios.get(`${GLOBALS.BASE_URL}/properties.php?data=propertyDetail&id=${id}`)
            .then(response => {
                dispatch({ 
                    type: PROPERTY_FETCH_SUCCESS,
                    payload: response.data.property[0]
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const propertiesFiltered = (lat, lng) => {
    return (dispatch) => {
        // Return promise to use async await in PropertySearch
        return axios.get(`${GLOBALS.BASE_URL}/properties.php?data=searchByDistance&lat=${lat}&lng=${lng}`)
            .then(response => {                
                dispatch({ 
                    type: PROPERTIES_FILTERED,
                    payload: response.data.property
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const udpateSearchTerm = (searchTerm) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_SEARCH_TERM,
            payload: searchTerm
        })
    }
}
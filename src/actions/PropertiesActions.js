import { Actions } from 'react-native-router-flux';
import {
    PROPERTIES_FETCH_SUCCESS
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
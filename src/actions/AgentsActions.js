import { Actions } from 'react-native-router-flux';
import {
    AGENTS_FETCH_SUCCESS
} from './types';
import axios from 'axios';
import GLOBALS from '../components/common/Globals';

export const agentsFetch = () => {

    return (dispatch) => {
        axios.get(`${GLOBALS.BASE_URL}/agents-list.php`)
        .then(response => {
            dispatch({ 
                type: AGENTS_FETCH_SUCCESS,
                payload: response.data.agents
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
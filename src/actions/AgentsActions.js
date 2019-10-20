import {
    AGENTS_FETCH_SUCCESS, AGENT_FETCH_SUCCESS
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

export const agentFetch = (id) => {
    return (dispatch) => {
        axios.get(`${GLOBALS.BASE_URL}/agents-api.php?data=agentDetail&id=${id}`)
            .then(response => {
                dispatch({ 
                    type: AGENT_FETCH_SUCCESS,
                    payload: response.data.agent
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
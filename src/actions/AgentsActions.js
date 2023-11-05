import {
  AGENTS_FETCH_SUCCESS,
  AGENT_FETCH_SUCCESS,
  AGENTS_FILTERED,
} from "./types";
import AgentsService from "../services/AgentsService";

export const agentsFetch = () => async (dispatch) => {
  try {
    const res = await AgentsService.getAgents();

    dispatch({
      type: AGENTS_FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("error ", err);
  }
};

export const findAgentById = (id) => async (dispatch) => {
  try {
    const res = await AgentsService.getAgentById(id);

    dispatch({
      type: AGENT_FETCH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const saveMessage = async (id, msg) => {
  try {
    const res = await AgentsService.saveMessage(id, msg);
  } catch (err) {
    console.log(err);
  }
};

export const agentsFiltered = (city, state) => async (dispatch) => {
  try {
    const res = await AgentsService.getAgentsFiltered(city, state);

    // dispatch({
    //   type: SEARCH_LAT_LNG,
    //   payload: { lat, lng },
    // });

    dispatch({
      type: AGENTS_FILTERED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const agentsFiltered = (city, state) => async (dispatch) => {
//   console.log("Agent city ", city, state);
//   try {
//     // let promise = new Promise((resolve, reject) => {
//     AgentsService.getAgentsFiltered(city, state).then((response) => {
//       console.log("AGENTS ", response);

//       dispatch({
//         type: AGENTS_FILTERED,
//         payload: response.data,
//       });
//     });
//     //  });

//     //   let result = await promise; // wait until the promise resolves (*)

//     // alert(result); // "done!"

//     // console.log("AGENTS ", res);

//     // dispatch({
//     //   type: SEARCH_LAT_LNG,
//     //   payload: { lat, lng },
//     // });
//   } catch (err) {
//     console.log(err);
//   }
// };

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   alert(result); // "done!"
// }

// f();

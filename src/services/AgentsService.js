import axios from "axios";
import GLOBALS from "../components/Common/Globals";

const getAgents = () => {
  return axios.get(`${GLOBALS.BASE_URL}/agents`).catch(function (e) {
    console.log(e);
  });
};

const getAgentById = (id) => {
  return axios.get(`${GLOBALS.BASE_URL}/agent/${id}`);
};

const saveMessage = (id, message) => {
  return axios.post(`${GLOBALS.BASE_URL}/agent/${id}/message`, {
    uid: id,
    message,
  });
};

const getAgentsFiltered = (city, state) => {
  return axios
    .get(
      `${GLOBALS.BASE_URL}/agentsUSRealEstate?city=${city}&state_code=${state}`
    )
    .catch(function (e) {
      console.log(e);
    });
};

const AgentsService = {
  getAgents,
  getAgentById,
  saveMessage,
  getAgentsFiltered,
};

export default AgentsService;

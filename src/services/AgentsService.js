import axios from "axios";
import GLOBALS from "../components/Common/Globals";

const getAgents = () => {
  return axios.get(`${GLOBALS.BASE_URL}/agents`);
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

const AgentsService = {
  getAgents,
  getAgentById,
  saveMessage,
};

export default AgentsService;

import axios from "axios";
import GLOBALS from "../components/Common/Globals";

const getProperties = () => {
  return axios.get(`${GLOBALS.BASE_URL}/properties`);
};

const getPropertiesFiltered = (lat, lng) => {
  return axios.get(
    `${GLOBALS.BASE_URL}/search/properties?lat=${lat}&lng=${lng}`
  );
};

const getPropertiesZillow = (state, city) => {
  return axios.get(
    `${GLOBALS.BASE_URL}/propertiesZillow?state_code=${state}&city=${city}`
  );
};

const PropertiesService = {
  getProperties,
  getPropertiesFiltered,
  getPropertiesZillow,
};

export default PropertiesService;

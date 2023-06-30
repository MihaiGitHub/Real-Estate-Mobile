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

const getPropertiesUSRealEstate = (state, city) => {
  return axios.get(
    `${GLOBALS.BASE_URL}/propertiesUSRealEstate?state_code=${state}&city=${city}`
  );
};

const getPropertyUSRealEstate = (pid) => {
  return axios.get(`${GLOBALS.BASE_URL}/propertyUSRealEstate?pid=${pid}`);
};

const PropertiesService = {
  getProperties,
  getPropertiesFiltered,
  getPropertiesUSRealEstate,
  getPropertyUSRealEstate,
};

export default PropertiesService;

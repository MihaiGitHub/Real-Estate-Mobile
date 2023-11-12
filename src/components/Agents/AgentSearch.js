import React, { useState, useEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";
import Geocoder from "react-native-geocoding";
import { useSelector, useDispatch } from "react-redux";
import GLOBALS from "../Common/Globals";
import { agentsFiltered } from "../../actions/AgentsActions";
import { useNavigation } from "@react-navigation/native";

export function AgentSearch() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const lat = location.coords.latitude;
      const lng = location.coords.longitude;

      // Initialize the module (needs to be done only once)
      Geocoder.init(`${GLOBALS.GOOGLE_CLOUD_SERVICES_API_KEY}`);

      // Search by geo-location (reverse geo-code)
      Geocoder.from(lat, lng)
        .then((json) => {
          var addressComponent = json.results[0].address_components;
          setCity(addressComponent[3]["short_name"]);
          setState(addressComponent[5]["short_name"]);
        })
        .catch((error) => console.warn(error));
    })();
  }, []);

  const currentLocation = {
    description: "Current Location",
    terms: [{ value: city }, { value: state }],
  };

  return (
    <GooglePlacesAutocomplete
      placeholder="Address, city or zip"
      onPress={async (data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("data ", data);

        await dispatch(
          agentsFiltered(data.terms[0].value, data.terms[1].value)
        );

        navigation.navigate("Agent List");
      }}
      query={{
        key: GLOBALS.GOOGLE_CLOUD_SERVICES_API_KEY,
        language: "en",
      }}
      predefinedPlaces={[currentLocation]}
    />
  );
}

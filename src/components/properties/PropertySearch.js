import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from 'expo-location';
import { Actions } from "react-native-router-flux";
import {
  propertiesFiltered,
  udpateSearchTerm,
} from "../../actions/PropertiesActions";
import GLOBALS from "../common/Globals";

const PropertySearch = (props) => {
  const [location, setLocation] = useState(null);
  const [currentLat, setCurrentLat] = useState(null);
  const [currentLng, setCurrentLng] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const currentLocation = {
    description: 'Current Location',
    geometry: { 
      location: { 
        lat: currentLat, 
        lng: currentLng
      } 
    },
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCurrentLat(location.coords.latitude);
      setCurrentLng(location.coords.longitude);
    })();
  }, []);

  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2} // minimum length of text to search
      autoFocus={true}
      returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed="auto" // true/false/undefined
      fetchDetails={true}
      renderDescription={(row) => row.description} // custom description render
      onPress={async (data, details = null) => {
        // 'details' is provided when fetchDetails = true

        await props.propertiesFiltered(
          details.geometry.location.lat,
          details.geometry.location.lng
        );
        
        await props.udpateSearchTerm(details.formatted_address);

        Actions.propertiesMain();
      }}
      getDefaultValue={() => ""}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: GLOBALS.GOOGLE_CLOUD_SERVICES_API_KEY,
        language: "en", // language of the results
        types: "(cities)", // default: 'geocode'
      }}
      styles={{
        textInputContainer: {
          width: "100%",
        },
        description: {
          fontWeight: "bold",
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
      currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI="GoogleReverseGeocoding" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={
        {
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }
      }
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: "distance",
        types: "food",
      }}
      filterReverseGeocodingByTypes={[
        "locality",
        "administrative_area_level_3",
      ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[currentLocation]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    />
  );
};

export default connect(null, { propertiesFiltered, udpateSearchTerm })(
  PropertySearch
);

import React, { useState, useEffect } from "react";
import {
  //   Platform,
  Text,
  //   View,
  //   StyleSheet
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// //import * as Location from "expo-location";
// //import Geolocation from "react-native-geolocation-service";
// //import GetLocation from "react-native-get-location";
import GLOBALS from "../Common/Globals";
import { useSelector, useDispatch } from "react-redux";
import {
  agentsFiltered,
  // udpateSearchTerm,
} from "../../actions/AgentsActions";
import { useNavigation } from "@react-navigation/native";

export function AgentSearch() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <GooglePlacesAutocomplete
      placeholder="Address, city or zip"
      onPress={async (data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("data ", data);

        await dispatch(
          agentsFiltered(data.terms[0].value, data.terms[1].value)
        );

        //         await dispatch(udpateSearchTerm(details.formatted_address));

        navigation.navigate("Agent List");
      }}
      query={{
        key: GLOBALS.GOOGLE_CLOUD_SERVICES_API_KEY,
        language: "en",
      }}
    />
  );

  //   const dispatch = useDispatch();
  //   const navigation = useNavigation();
  //   // const [location, setLocation] = useState(null);
  //   // const [currentLat, setCurrentLat] = useState(null);
  //   // const [currentLng, setCurrentLng] = useState(null);
  //   // const [errorMsg, setErrorMsg] = useState(null);

  //   // const currentLocation = {
  //   //   description: "Current Location",
  //   //   geometry: {
  //   //     location: {
  //   //       lat: currentLat,
  //   //       lng: currentLng,
  //   //     },
  //   //   },
  //   // };

  //   // useEffect(() => {
  //   //   (async () => {
  //   //     // let { status } = await Location.requestBackgroundPermissionsAsync();
  //   //     // if (status !== "granted") {
  //   //     //   setErrorMsg("Permission to access location was denied");
  //   //     // }
  //   //     // let location = await Location.getCurrentPositionAsync({});
  //   //     // setLocation(location);
  //   //     // setCurrentLat(location.coords.latitude);
  //   //     // setCurrentLng(location.coords.longitude);
  //   //   })();
  //   // }, []);

  //   // useEffect(() => {
  //   //   //  if (hasLocationPermission) {
  //   //   Geolocation.getCurrentPosition(
  //   //     (position) => {
  //   //       console.log(position);
  //   //     },
  //   //     (error) => {
  //   //       // See error code charts below.
  //   //       console.log(error.code, error.message);
  //   //     },
  //   //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //   //   );
  //   //   //   }
  //   // }, []);

  //   useEffect(() => {
  //     // console.log(
  //     //   "GetLocation ",
  //     //   GetLocation.getCurrentPosition({
  //     //     enableHighAccuracy: true,
  //     //     timeout: 15000,
  //     //   })
  //     // );
  //     // GetLocation.getCurrentPosition({
  //     //   enableHighAccuracy: true,
  //     //   timeout: 15000,
  //     // })
  //     //   .then((location) => {
  //     //     console.log(location);
  //     //   })
  //     //   .catch((error) => {
  //     //     const { code, message } = error;
  //     //     console.warn(code, message);
  //     //   });
  //   }, []);

  //   return (
  //     <GooglePlacesAutocomplete
  //       placeholder="Search"
  //       minLength={2} // minimum length of text to search
  //       autoFocus={true}
  //       returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
  //       listViewDisplayed="auto" // true/false/undefined
  //       fetchDetails={true}
  //       renderDescription={(row) => row.description} // custom description render
  //       onPress={async (data, details = null) => {
  //         // 'details' is provided when fetchDetails = true
  //         await dispatch(
  //           propertiesFiltered(
  //             details.geometry.location.lat,
  //             details.geometry.location.lng
  //           )
  //         );

  //         await dispatch(udpateSearchTerm(details.formatted_address));

  //         navigation.navigate("PropertiesMain");
  //       }}
  //       getDefaultValue={() => ""}
  //       query={{
  //         // available options: https://developers.google.com/places/web-service/autocomplete
  //         key: Globals.GOOGLE_CLOUD_SERVICES_API_KEY,
  //         language: "en", // language of the results
  //         types: "(cities)", // default: 'geocode'
  //       }}
  //       styles={{
  //         textInputContainer: {
  //           width: "100%",
  //         },
  //         description: {
  //           fontWeight: "bold",
  //         },
  //         predefinedPlacesDescription: {
  //           color: "#1faadb",
  //         },
  //       }}
  //       currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
  //       currentLocationLabel="Current location"
  //       nearbyPlacesAPI="GoogleReverseGeocoding" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
  //       GoogleReverseGeocodingQuery={
  //         {
  //           // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
  //         }
  //       }
  //       GooglePlacesSearchQuery={{
  //         // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
  //         rankby: "distance",
  //         types: "food",
  //       }}
  //       filterReverseGeocodingByTypes={[
  //         "locality",
  //         "administrative_area_level_3",
  //       ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
  //       //    predefinedPlaces={[currentLocation]}
  //       debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
  //     />
  //   );
}

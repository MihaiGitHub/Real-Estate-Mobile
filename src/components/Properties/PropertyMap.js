import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import getDirections from "react-native-google-maps-directions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export function PropertyMap({ route }) {
  console.log("ROUTE ", route);
  const { latitude, longitude } = route.params;

  const { listFiltered } = useSelector((state) => state.properties);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // useEffect(() => {
  //   dispatch(findPropertyById());
  // }, []);

  if (Array.isArray(listFiltered) && listFiltered.length > 0) {
    var { lat, lng } = listFiltered[0];
  } else {
    //var { lat, lng } = props.searchLatLng;
    var lat = 33.448376;
    var lng = -112.074036;
  }

  const handleGetDirections = () => {
    const data = {
      destination: {
        latitude: parseFloat(latitude, 10),
        longitude: parseFloat(longitude, 10),
      },
      params: [
        {
          key: "travelmode",
          value: "driving", // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate", // this instantly initializes navigation using the given travel mode
        },
      ],
    };

    getDirections(data);
  };

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        latitudeDelta: 0.7,
        longitudeDelta: 0.7,
      }}
      showsUserLocation={true}
    >
      <Marker
        key={1}
        coordinate={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        }}
        title="Get Directions"
        onCalloutPress={() => handleGetDirections()}
      />
    </MapView>
  );
}

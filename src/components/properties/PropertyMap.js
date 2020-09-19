import React from "react";
import MapView from "react-native-maps";
import getDirections from "react-native-google-maps-directions";

const PropertyMap = (props) => {
  const { latitude, longitude } = props;

  const handleGetDirections = () => {
    const data = {
      destination: {
        latitude: parseFloat(props.latitude, 10),
        longitude: parseFloat(props.longitude, 10),
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
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      }}
      showsUserLocation={true}
    >
      <MapView.Marker
        key={42}
        coordinate={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        }}
        title={"Get Directions"}
        onCalloutPress={() => handleGetDirections()}
      />
    </MapView>
  );
};

export default PropertyMap;

import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapView from "react-native-maps";
import { findPropertyById } from "../../actions/PropertiesActions";

export function PropertiesMap({ navigation }) {
  const { listFiltered } = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPropertyById());
  }, []);

  if (Array.isArray(listFiltered) && listFiltered.length > 0) {
    var { lat, lng } = listFiltered[0];
  } else {
    //var { lat, lng } = props.searchLatLng;
    var lat = 33.4484;
    var lng = 112.074;
  }

  console.log("lat,  lng ", lat, lng);
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        latitudeDelta: 0.7,
        longitudeDelta: 0.7,
      }}
      showsUserLocation={true}
    >
      {listFiltered.map((marker, index) => (
        <MapView.Marker
          key={index}
          coordinate={{
            latitude: parseFloat(marker.lat),
            longitude: parseFloat(marker.lng),
          }}
          title={"$" + marker.price}
          //      nCalloutPress={() => Actions.propertyView({ id: marker.id })}
        />
      ))}
    </MapView>
  );
}

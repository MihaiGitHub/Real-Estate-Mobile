import React, { useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import "intl";
import "intl/locale-data/jsonp/en"; // or any other locale you need

export function PropertiesMap() {
  const { listFiltered, searchLatLng, propertiesUSRealEstate } = useSelector(
    (state) => state.properties
  );

  const dollarUSLocale = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const navigation = useNavigation();

  if (Array.isArray(listFiltered) && listFiltered.length > 0) {
    var { lat, lng } = listFiltered[0];
  } else {
    var lat = 33.448376;
    var lng = -112.074036;
  }

  return (
    <MapView
      style={{ minHeight: "100%", minWidth: "100%" }}
      initialRegion={{
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        latitudeDelta: 0.7,
        longitudeDelta: 0.7,
      }} //onRegionChangeComplete runs when the user stops dragging MapView
      //   onRegionChangeComplete={(region) => setRegion(region)}
    >
      {listFiltered.length > 0 &&
        listFiltered.map((marker, index) => {
          if (marker?.lat && marker?.lng) {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: parseFloat(marker.lat),
                  longitude: parseFloat(marker.lng),
                }}
                title={dollarUSLocale.format(marker.price)}
                onCalloutPress={() =>
                  navigation.navigate("Property Info", {
                    id: marker.id,
                  })
                }
              />
            );
          }
        })}
      {propertiesUSRealEstate.length > 0 &&
        propertiesUSRealEstate.map((marker, index) => {
          if (
            marker?.location?.address?.coordinate?.lat &&
            marker?.location?.address?.coordinate?.lon
          ) {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: parseFloat(
                    marker.location?.address?.coordinate?.lat
                  ),
                  longitude: parseFloat(
                    marker.location?.address?.coordinate?.lon
                  ),
                }}
                title={dollarUSLocale.format(marker.list_price)}
                onCalloutPress={() =>
                  navigation.navigate("Property Info US Real Estate", {
                    id: marker.property_id,
                  })
                }
              />
            );
          }
        })}
    </MapView>
  );
}

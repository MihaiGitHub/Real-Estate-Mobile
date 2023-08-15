import React, { useState } from "react";
//import { Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
//import { useNavigation } from "@react-navigation/native";

export function PropertiesMap() {
  const { listFiltered, searchLatLng, propertiesUSRealEstate } = useSelector(
    (state) => state.properties
  );

  console.log("listUSRealEstate ", listFiltered);
  console.log("propertiesUSRealEstate ", propertiesUSRealEstate);

  //const dispatch = useDispatch();
  // const navigation = useNavigation();

  if (Array.isArray(listFiltered) && listFiltered.length > 0) {
    var { lat, lng } = listFiltered[0];
  } else {
    // var { lat, lng } = searchLatLng;

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
        listFiltered.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(marker.lat),
              longitude: parseFloat(marker.lng),
            }}
            title={"$" + marker.price}
            onCalloutPress={() =>
              navigation.navigate("Property Info", {
                id: marker.id,
              })
            }
          />
        ))}
      {propertiesUSRealEstate.length > 0 &&
        propertiesUSRealEstate.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(marker.location?.address?.coordinate?.lat),
              longitude: parseFloat(marker.location?.address?.coordinate?.lon),
            }}
            title={"$" + marker.list_price}
            onCalloutPress={() =>
              navigation.navigate("Property Info", {
                id: marker.property_id,
              })
            }
          />
        ))}
    </MapView>
  );
}

// import React, { useState } from "react";
// import { StyleSheet, View } from "react-native";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// //import { useSelector, useDispatch } from "react-redux";
// //import { useNavigation } from "@react-navigation/native";
// //https://docs.expo.dev/versions/latest/sdk/map-view/
// //https://developers.google.com/maps/documentation/android-sdk/config
// export function PropertiesMap() {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: "100%",
//     height: "100%",
//   },
// });

import React from "react";
import { Text } from "react-native";
import MapView from "react-native-maps";

export function PropertiesMap() {
  return (
    <MapView
      style={{ minHeight: "100%", minWidth: "100%" }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import MapView from "react-native-maps";
// import { findPropertyById } from "../../actions/PropertiesActions";
// import { useNavigation } from "@react-navigation/native";

// export function PropertiesMap() {
//   const { listFiltered, searchLatLng } = useSelector(
//     (state) => state.properties
//   );

//   const dispatch = useDispatch();
//   const navigation = useNavigation();

//   useEffect(() => {
//     dispatch(findPropertyById());
//   }, []);

//   if (Array.isArray(listFiltered) && listFiltered.length > 0) {
//     var { lat, lng } = listFiltered[0];
//   } else {
//     // var { lat, lng } = searchLatLng;

//     var lat = 33.448376;
//     var lng = -112.074036;
//   }
//   console.log("coords ", lat, lng);

//   return (
//     <MapView
//       style={{ flex: 1 }}
//       initialRegion={{
//         latitude: parseFloat(lat),
//         longitude: parseFloat(lng),
//         latitudeDelta: 0.7,
//         longitudeDelta: 0.7,
//       }}
//       showsUserLocation={true}
//     >
//       {listFiltered.map((marker, index) => (
//         <MapView.Marker
//           key={index}
//           coordinate={{
//             latitude: parseFloat(marker.lat),
//             longitude: parseFloat(marker.lng),
//           }}
//           title={"$" + marker.price}
//           onCalloutPress={() =>
//             navigation.navigate("Property Info", {
//               id: marker.id,
//             })
//           }
//         />
//       ))}
//     </MapView>
//   );
// }

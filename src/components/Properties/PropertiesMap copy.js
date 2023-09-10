import React, { useState } from "react";
//import { Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
//import { useSelector, useDispatch } from "react-redux";
//import { useNavigation } from "@react-navigation/native";

export function PropertiesMap111() {
  // return <Text>PropertiesMap</Text>;
  // const { listFiltered, searchLatLng, propertiesUSRealEstate } = useSelector(
  //   (state) => state.properties
  // );

  // console.log("listUSRealEstate ", listFiltered);
  // console.log("propertiesUSRealEstate ", propertiesUSRealEstate);

  // const dispatch = useDispatch();
  // const navigation = useNavigation();

  // if (Array.isArray(listFiltered) && listFiltered.length > 0) {
  //   var { lat, lng } = listFiltered[0];
  // } else {
  //   // var { lat, lng } = searchLatLng;

  //   var lat = 33.448376;
  //   var lng = -112.074036;
  // }

  return (
    <MapView
      style={{ minHeight: "100%", minWidth: "100%" }}
      initialRegion={{
        latitude: parseFloat(33.448376),
        longitude: parseFloat(-112.074036),
        latitudeDelta: 0.7,
        longitudeDelta: 0.7,
      }} //onRegionChangeComplete runs when the user stops dragging MapView
      //   onRegionChangeComplete={(region) => setRegion(region)}
    >
      <Marker
        key={55}
        coordinate={{
          latitude: parseFloat(33.448376),
          longitude: parseFloat(-112.074036),
        }}
        title={"$1000"}
        // onCalloutPress={() =>
        //   navigation.navigate("Property Info", {
        //     id: marker.id,
        //   })
        // }
      />
      {/* {listFiltered.length > 0 &&
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
        ))} */}
    </MapView>
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

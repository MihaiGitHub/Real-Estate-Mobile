import React from "react";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import { Actions } from "react-native-router-flux";

const PropertyMapSearch = (props) => {
  
  if(Array.isArray(props.listFiltered) && props.listFiltered.length > 0){
    var { lat, lng } = props.listFiltered[0];
  }
  else {
    var { lat, lng } = props.searchLatLng;
  }

  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        latitudeDelta: 0.7,
        longitudeDelta: 0.7,
      }}
    >
      {props.listFiltered.map((marker, index) => (
        <MapView.Marker
          key={index}
          coordinate={{
            latitude: parseFloat(marker.lat),
            longitude: parseFloat(marker.lng),
          }}
          title={"$" + marker.price}
          onCalloutPress={() => Actions.propertyView({ id: marker.id })}
        />
      ))}
    </MapView>
  );
};

const mapStateToProps = (state) => {
  const { listFiltered, searchLatLng, loading } = state.properties;

  return { listFiltered, searchLatLng, loading };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, {})(PropertyMapSearch);

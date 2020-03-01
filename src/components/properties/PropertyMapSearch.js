import React from 'react';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';

class PropertyMapSearch extends React.Component {
    render(){
        const { latitude, longitude } = this.props.listFiltered[0];

        return (
            <MapView style={{ flex: 1 }}
                region={{
                    latitude: parseFloat(latitude),
                    longitude: parseFloat(longitude),
                    latitudeDelta: 0.7,
                    longitudeDelta: 0.7,
                }}
            >              
              {this.props.listFiltered.map((marker, index) => (
                  <MapView.Marker key={index}
                      coordinate={{ 
                        latitude: parseFloat(marker.latitude), 
                        longitude: parseFloat(marker.longitude) 
                      }}
                      title={'$'+marker.price}
                      onCalloutPress={() => Actions.propertyView({ id: marker.pId })}
                  />
              ))}
            </MapView>
        );
    }
}

const mapStateToProps = state => {
  const { listFiltered, loading } = state.properties;

  return { listFiltered, loading };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, {})(PropertyMapSearch);
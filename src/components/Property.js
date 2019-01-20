import React, { Component } from 'react';
import { ScrollView, View, Button } from 'react-native';

import getDirections from 'react-native-google-maps-directions'


class Property extends Component {

    handleGetDirections = () => {
        const data = {
           source: {
            latitude: -33.8356372,
            longitude: 18.6947617
          },
          destination: {
            latitude: -33.8600024,
            longitude: 18.697459
          },
          params: [
            {
              key: "travelmode",
              value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate"       // this instantly initializes navigation using the given travel mode 
            }
          ]
        }
     
        getDirections(data)
      }
     

    render() {
        console.log(this.state);

        return (
            <View>
                <Button onPress={this.handleGetDirections} title="Get Directions" />
            </View>
        );
    }
}

export default Property;
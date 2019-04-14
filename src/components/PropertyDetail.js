import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import axios from 'axios';
import getDirections from 'react-native-google-maps-directions'
import { Card, ListItem, Button, Icon, Tile } from 'react-native-elements'
import GLOBALS from './common/Globals';

class PropertyDetail extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            property: [],
            url: '',
            description: ''
        }
    }

    componentWillMount = () => {
        
        axios.get(`${GLOBALS.BASE_URL}/properties.php?data=propertyDetail&id=${this.props.id}`)
            .then(response => this.setState({ 
                url: response.data.property[0].pImage, 
                description: response.data.property[0].description
            }))
            .catch(function (error) {
                console.log(error);
            });  
    }

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
     
      console.log(this.state.url);
      console.log('this.props ', this.props)

        let img = `${GLOBALS.BASE_URL}${this.state.url}`;

        return (
            <ScrollView>
                <Tile
                    imageContainerStyle={{ height: 230 }}
                    imageSrc={{ uri: img }}
                //    title="title"
                    contentContainerStyle={{ height: 100 }}
                    height={300}
                    titleStyle={{ color: 'black'  }}
                >
                    <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'stretch',
                    }}>
                            <View style={{ height: 20 }}>
                                <Text style={{ color: 'black' }}>
                                    Beds  Baths land area
                                </Text>
                        {/*       <Button onPress={this.handleGetDirections} title="Get Directions" /> */}
                            </View>
                            <View style={{ height: 20 }}>
                                <Text style={{ color:'black' }}>
                                    location
                                </Text>
                            </View>
                            <View style={{ height: 20 }}>
                                <Text style={{ color:'black' }}>
                                    {this.state.description}
                                </Text>
                            </View>
                    </View>
                </Tile>
            </ScrollView>
        );
    }
}

export default PropertyDetail;
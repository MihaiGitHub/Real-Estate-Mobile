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
            property: {}
        }
    }

    componentWillMount = () => {
        axios.get(`${GLOBALS.BASE_URL}/properties.php?data=propertyDetail&id=${this.props.id}`)
            .then(response => this.setState({
                property: response.data.property[0]
            }))
            .catch(function (error) {
                console.log(error);
            });  
    }

    handleGetDirections = () => {
        const data = {
          destination: {
            latitude: parseFloat(this.state.property.latitude, 10),
            longitude: parseFloat(this.state.property.longitude, 10)
          },
          params: [
            {
              key: "travelmode",
              value: "driving" // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate" // this instantly initializes navigation using the given travel mode 
            }
          ]
        }
     
        getDirections(data)
      }   

    render() {

        let img = `${GLOBALS.BASE_URL}${this.state.property.pImage}`;

        return (
            <View>
                <Tile
                    imageContainerStyle={{ height: 230 }}
                    imageSrc={{ uri: img }}
                    contentContainerStyle={{ height: 65 }}
                    height={370}
                    titleStyle={{ color: 'black'  }}
                >
                    <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'stretch',
                    }}>
                            <View>
                                <Button 
                                    icon={<Icon name='directions' color='#ffffff' />}
                                    onPress={this.handleGetDirections} 
                                    title=" Directions" 
                                />
                            </View>
                            <View>
                                <Text style={{ color: 'black' }}>
                                    {this.state.property.bedroom} Beds {this.state.property.bathroom} Baths
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color:'black' }}>
                                    {this.state.property.location}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color:'black' }}>
                                    {this.state.property.description}
                                </Text>
                            </View>
                    </View>
                </Tile>
            </View>
        );
    }
}

export default PropertyDetail;
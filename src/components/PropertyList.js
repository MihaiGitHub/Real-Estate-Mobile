import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import { Avatar, Badge, Icon, withBadge, Tile, Grid, Row } from 'react-native-elements'
import { Scene, Router, Actions } from 'react-native-router-flux';
import GLOBALS from './common/Globals';

class PropertyList extends Component {

    state = { 
        properties: []
    };

    componentWillMount() {
        // Returns a promise that .then will be called once the http call is complete
        var bodyFormData = new FormData();
        bodyFormData.append('data', 'all');

        axios({
            method: 'post',
            url: `${GLOBALS.BASE_URL}/properties.php`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => this.setState({ properties: response.data.property }))
            .catch(function (response) {
                console.log(response);
            }); 
    }

    renderProperties() {
        return this.state.properties.map(property => 
            <Tile key={property.title} onPress={() => Actions.propertyView({ id: property.pId })}
                imageContainerStyle={{ height: 230 }}
                imageSrc={{uri: property.pImage == null ? `${GLOBALS.BASE_URL}/dashboard/img/house.gif` : `${GLOBALS.BASE_URL}${property.pImage}`}}
                title={`$${property.price}`}
                contentContainerStyle={{ height: 130 }}
                height={240}
                titleStyle={{ color: property.pImage == null ? 'black' : 'white' }}
            >
                <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'stretch',
                }}>
                        <View style={{ height: 20 }}>
                            <Text style={{ color: property.pImage == null ? 'black' : 'white' }}>
                                {property.bedroom} Beds   {property.bathroom} Baths   {property.land_area} land area
                            </Text>
                        </View>
                        <View style={{ height: 20 }}>
                            <Text style={{ color: property.pImage == null ? 'black' : 'white' }}>
                                {property.location}
                            </Text>
                        </View>
                </View>
            </Tile>
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderProperties()}
            </ScrollView>
        );
    }
}

export default PropertyList;
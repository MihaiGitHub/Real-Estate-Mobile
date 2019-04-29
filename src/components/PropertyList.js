import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Badge, Icon, withBadge, Tile, Grid, Row } from 'react-native-elements'
import { Scene, Router, Actions } from 'react-native-router-flux';
import GLOBALS from './common/Globals';
import { propertiesFetch } from '../actions';

class PropertyList extends Component {
    componentWillMount() {
        this.props.propertiesFetch();
    }

    renderProperties() {        
        return this.props.properties.map((property, index) =>
            <Tile 
                key={index} 
                onPress={() => Actions.propertyView({ id: property.pId })}
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

const mapStateToProps = state => {
    const properties = _.map(state.properties, (val, uid) => {
        return { ...val, uid };
    });

    return { properties };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { propertiesFetch })(PropertyList);
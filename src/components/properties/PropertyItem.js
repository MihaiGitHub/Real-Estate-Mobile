import React, { Component, Fragment } from 'react';
import { ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Text, Body } from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';

class PropertyItem extends Component {
    renderProperties = () => {
        if(Array.isArray(this.props.listFiltered)){
            return this.props.listFiltered.map(property => {
                return (
                    <Card key={property.pId} style={{ flex: 0 }}>
                        <CardItem cardBody>
                            <SliderBox
                                images={property.pImage}
                                sliderBoxHeight={200}
                                onCurrentImagePressed={index => {
                                        Actions.propertyView({ id: property.pId })
                                        console.log(`image ${index} pressed`)
                                    } 
                                }
                                dotColor="#FFEE58"
                                inactiveDotColor="#90A4AE"
                            />
                        </CardItem>
                        <CardItem>
                            <Body style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ minWidth: '50%', fontWeight: '600', fontSize: 20 }}>${property.price}</Text>
                                <Text style={{ minWidth: '50%', textAlign: 'right', fontSize: 15 }}>{property.bedroom} beds   {property.bathroom} baths</Text>
                                <Text style={{ fontSize: 14 }}>{property.location}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                );
            });
        } else {
            ToastAndroid.show('No properties found near this location!', ToastAndroid.LONG)
        }
    }

    render(){
        return (
            <Fragment>
                {this.renderProperties()}
            </Fragment>
        );
    }
}

export default PropertyItem;
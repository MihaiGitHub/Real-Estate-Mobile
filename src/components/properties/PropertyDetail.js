import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SliderBox } from 'react-native-image-slider-box';
import GLOBALS from '../common/Globals';
import SCREEN_IMPORT from 'Dimensions';
import { propertyFetch } from '../../actions';
import { Spinner } from '../common/Spinner';

const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width;

class PropertyDetail extends Component {

    componentWillMount = () => {
        this.props.propertyFetch(this.props.id); 
    }

    handleFeatures = () => {
        if(this.props.property.features){
            let features = this.props.property.features.split(",");

            return features.map(feature => {
                return (
                    <Text key={feature} style={{ paddingBottom: 5, minWidth: '50%', textAlign: 'left' }}>
                        -{feature}
                    </Text>
                );
            });
        }
    }

    handleGetDirections = () => {
        const data = {
          destination: {
            latitude: parseFloat(this.props.property.latitude, 10),
            longitude: parseFloat(this.props.property.longitude, 10)
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
        if(this.props.loadingProperty){
            return <Spinner size="large" />;
        }
        
        if(this.props.property.pImage){
            images = this.props.property.pImage.map(i => `${GLOBALS.BASE_URL}` + i);
        } else {
            images = [`${GLOBALS.BASE_URL}/dashboard/img/house.gif`];
        }

        return (
            <Container>
                <Content>
                <View style={{flex: 0}}>
                    <SliderBox
                        images={images}
                        sliderBoxHeight={200}
                        onCurrentImagePressed={index =>
                            console.log(`image ${index} pressed`)
                        }
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                    />
                    </View>
                    <Card style={{flex: 0}}>
                    <CardItem>
                            <Body style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontSize: 26, fontWeight: '500', minWidth: '60%' }}>
                                    ${this.props.property.price}
                                </Text>
                                <Text style={{ marginTop: 5, minWidth: '40%', textAlign: 'right' }}>
                                    {this.props.property.bedroom} Beds {this.props.property.bathroom} Baths
                                </Text>
                                <Text style={{ marginBottom: 5, minWidth: '100%' }}>
                                    {this.props.property.location}
                                </Text>
                                <Button
                                    full
                                    info 
                                    onPress={this.handleGetDirections} 
                                    style={{ marginBottom: 5, minWidth: '100%' }}>
                                <Icon active name="directions" size={25} color="#ffffff" />
                                <Text>GET DIRECTIONS</Text>
                                </Button>
                                <Text style={{ fontSize: 19, paddingBottom: 5, minWidth: '100%', fontWeight: '400' }}>
                                    Features
                                </Text>
                                {this.handleFeatures()}
                                <Text style={{ fontSize: 19, paddingBottom: 5, paddingTop: 5, minWidth: '100%', fontWeight: '400' }}>
                                    About this home
                                </Text>
                                <Text style={{ minWidth: '100%' }}>
                                    {this.props.property.description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {    
    const { property, loadingProperty } = state.properties;

    return { property, loadingProperty };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { propertyFetch })(PropertyDetail);
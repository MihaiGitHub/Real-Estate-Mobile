import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import { Container, Content, Card, CardItem, Text, Button, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SliderBox } from 'react-native-image-slider-box';
import { Actions } from 'react-native-router-flux';
import GLOBALS from '../common/Globals';
import { propertyFetch } from '../../actions';
import { Spinner } from '../common/Spinner';

class PropertyDetail extends Component {

    componentDidMount = () => {
        this.props.propertyFetch(this.props.id); 
    }

    handleFeatures = () => {
        if(this.props.property.features){
            let features = this.props.property.features.split(",");

            return features.map(feature => {
                return (
                    <Text key={feature} style={styles.textFeatures}>
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

        const { latitude, longitude } = this.props.property;

        return (
            <Container>
                <Content>
                <View style={styles.view}>
                    <SliderBox 
                        images={images}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        onCurrentImagePressed={index =>
                            console.log(`image ${index} pressed`)
                        } />
                    <Button
                        small
                        primary
                        style={styles.mapBtn}
                        onPress={() => Actions.propertyMap({ latitude, longitude })}>
                        <Icon active name="map" size={25} color="#ffffff" style={styles.icon} />
                        <Text>VIEW MAP</Text>
                    </Button>
                    <Button
                        small
                        primary
                        onPress={this.handleGetDirections} 
                        style={styles.directionsBtn}>
                        <Icon active name="directions" size={25} color="#ffffff" style={styles.icon} />
                        <Text>DIRECTIONS</Text>
                    </Button>
                </View>
                <Card style={styles.card}>
                    <CardItem>
                        <Body style={styles.body}>
                            <Text style={styles.textPrice}>
                                ${this.props.property.price}
                            </Text>
                            <Text style={styles.textBedBath}>
                                {this.props.property.bedroom} Beds {this.props.property.bathroom} Baths
                            </Text>
                            <Text style={styles.textLocation}>
                                {this.props.property.location}
                            </Text>
                            <Text style={styles.textFeaturesTitle}>
                                Features
                            </Text>
                            {this.handleFeatures()}
                            <Text style={styles.textDescriptionTitle}>
                                About this home
                            </Text>
                            <Text style={styles.textDescription}>
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

const styles = {
    view: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'center'
    },
    sliderBox: {
        minWidth: '100%', 
        paddingBottom: 5
    },
    mapBtn: {
        marginRight: 2, 
        width: '49%', 
        borderRadius: 3
    },
    icon: {
        paddingLeft: 15
    },
    directionsBtn: {
        width: '49%', 
        borderRadius: 3
    },
    card: {
        flex: 0
    },
    body: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    textPrice: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 26, 
        fontWeight: '500', 
        minWidth: '59%'
    },
    textBedBath: {
        fontFamily: 'OpenSans-Regular',
        marginTop: 5, 
        minWidth: '41%', 
        textAlign: 'right'
    },
    textLocation: {
        fontFamily: 'OpenSans-Regular',
        marginBottom: 5, 
        minWidth: '100%'
    },
    textFeaturesTitle: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 19, 
        paddingBottom: 5, 
        minWidth: '100%', 
        fontWeight: '400'
    },
    textDescriptionTitle: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 19, 
        paddingBottom: 5, 
        paddingTop: 5, 
        minWidth: '100%', 
        fontWeight: '400'
    },
    textDescription: {
        fontFamily: 'OpenSans-Regular',
        minWidth: '100%'
    },
    textFeatures: {
        fontFamily: 'OpenSans-Regular',
        paddingBottom: 5, 
        minWidth: '50%', 
        textAlign: 'left'
    }
}

const mapStateToProps = state => {    
    const { property, loadingProperty } = state.properties;

    return { property, loadingProperty };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { propertyFetch })(PropertyDetail);
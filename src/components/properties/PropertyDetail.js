import React, { Component } from 'react';
import { Image, View } from 'react-native';
import axios from 'axios';
import getDirections from 'react-native-google-maps-directions';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SliderBox } from 'react-native-image-slider-box';
import GLOBALS from '../common/Globals';
import SCREEN_IMPORT from 'Dimensions';

const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width;

class PropertyDetail extends Component {
    
    state = {
        property: {},
        images: []
    }

    componentWillMount = () => {
        axios.get(`${GLOBALS.BASE_URL}/properties.php?data=propertyDetail&id=${this.props.id}`)
            .then(response => {
                if(response.data.property[0].pImage){
                    arr = response.data.property[0].pImage.map(i => `${GLOBALS.BASE_URL}` + i);

                    this.setState({
                        property: response.data.property[0],
                        images: arr
                    })
                } else {
                    this.setState({
                        property: response.data.property[0],
                        images: [`${GLOBALS.BASE_URL}/dashboard/img/house.gif`]
                    })
                }  
                
            })
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
        return (
            <Container>
                <Content>
                    <View style={{flex: 0}}>
                        <SliderBox
                            images={this.state.images}
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
                            <Body>
                                <Button
                                    full
                                    info 
                                    onPress={this.handleGetDirections} 
                                    style={{ marginBottom: 5 }}>
                                <Icon active name="directions" size={25} color="#ffffff" />
                                <Text>GET DIRECTIONS</Text>
                                </Button>
                                <Text style={{ marginTop: 5 }}>
                                    {this.state.property.bedroom} Beds {this.state.property.bathroom} Baths
                                </Text>
                                <Text style={{ marginBottom: 5 }}>
                                    {this.state.property.location}
                                </Text>
                                <Text>
                                    {this.state.property.description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default PropertyDetail;
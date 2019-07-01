import React, { Component } from 'react';
import { Image } from 'react-native';
import axios from 'axios';
import getDirections from 'react-native-google-maps-directions'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GLOBALS from './common/Globals';
import SCREEN_IMPORT from 'Dimensions'

const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width;

class PropertyDetail extends Component {
    
    state = {
        property: {},
        imgUrl: `${GLOBALS.BASE_URL}/dashboard/img/house.gif`
    }

    componentWillMount = () => {
        axios.get(`${GLOBALS.BASE_URL}/properties.php?data=propertyDetail&id=${this.props.id}`)
            .then(response => {
                
                if(response.data.property[0].pImage){
                    this.setState({
                        property: response.data.property[0],
                        imgUrl: `${GLOBALS.BASE_URL}/${response.data.property[0].pImage}`
                    })
                } else {
                    this.setState({
                        property: response.data.property[0]
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
                <Card style={{flex: 0}}>
                    <CardItem>
                    <Body>
                        <Image 
                            source={{ uri: this.state.imgUrl }} 
                            style={{ height: 200, width: SCREEN_WIDTH-40, flex: 1, marginBottom: 5 }} />
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
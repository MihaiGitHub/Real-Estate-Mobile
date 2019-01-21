import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Button } from 'react-native';
import axios from 'axios';

import getDirections from 'react-native-google-maps-directions'

import Card from './Card';
import CardSection from './CardSection';


class Property extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            property: [],
            url: '',
            description: ''
        }
    }
    

    componentWillMount = () => {
        
        axios.get(`http://ec2-34-209-228-103.us-west-2.compute.amazonaws.com/properties.php?data=propertyDetail&id=${this.props.id}`)
            .then(response => this.setState({ url: response.data.property[0].pImage, description: response.data.property[0].description }))
            .catch(function (error) { alert('failed');
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

        let img = `http://ec2-34-209-228-103.us-west-2.compute.amazonaws.com${this.state.url}`;

        return (
            <ScrollView>
                <Card>
                    <CardSection>
                        <Image style={styles.imageStyle} source={{ uri: img }} />
                    </CardSection>
                    <CardSection>
                        <View>
                            <Button onPress={this.handleGetDirections} title="Get Directions" />
                        </View>
                    </CardSection>
                    <CardSection>
                        <View>
                            <Text>{this.state.description}</Text>
                        </View>
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: { // Image will not render without a height and width
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null // Image will stretch full width
    }
};

export default Property;
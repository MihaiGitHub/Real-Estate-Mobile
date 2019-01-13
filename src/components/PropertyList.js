import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import PropertyDetail from './PropertyDetail';

class PropertyList extends Component {
    // Initialize state
    state = { properties: [] };

    // Anytime that the component is about to render this lifecycle method will be called
    componentWillMount() {
        // Returns a promise that .then will be called once the http call is complete
        var bodyFormData = new FormData();
        bodyFormData.append('data', 'all');

        axios({
            method: 'post',
            url: 'http://ec2-34-209-228-103.us-west-2.compute.amazonaws.com/properties.php',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => this.setState({ properties: response.data.property }))
            .catch(function (response) {
                console.log(response);
            }); 
    }

    renderProperties() {
        // Map over array of properties and return one item detail component
        return this.state.properties.map(property => 
            <PropertyDetail key={property.title} propertyProp={property} />
        );
    }

    render() {
        console.log(this.state);

        return ( // Everything inside this view is scrollable
            <ScrollView>
                {this.renderProperties()}
            </ScrollView>
        );
    }
}

export default PropertyList;
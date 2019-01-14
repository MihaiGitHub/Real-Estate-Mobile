import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';


class Property extends Component {
   // Initialize state
   state = { property: [] };

   // Anytime that the component is about to render this lifecycle method will be called
   componentWillMount() {
       /*
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
           */
   }

    renderProperty() {
        // Map over array of albums and return one item detail component
        return <Text>Property Details</Text>
    }

    render() {
        console.log(this.state);

        return ( // Everything inside this view is scrollable
            <ScrollView>
                {this.renderProperty()}
            </ScrollView>
        );
    }
}

export default Property;
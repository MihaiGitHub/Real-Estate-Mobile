import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';


class Property extends Component {
    // Initialize state
    state = { albums: [], property: [] };


    renderAlbums() {
        // Map over array of albums and return one item detail component
        return <Text>Mihaiiiiiiiiiii</Text>
    }

    render() {
        console.log(this.state);

        return ( // Everything inside this view is scrollable
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default Property;
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

class MyProfile extends Component {

    renderProfile() {
        return (
            <View>
                <Text>Terms and Conditions</Text>
                <Text>Privacy Policy</Text>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderProfile()}
            </ScrollView>
        );
    }
}

export default MyProfile;
import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';

class About extends Component {

    render() {

        return (
            <View>
                <Text>Title: Home Square Real Estate</Text>
                <Text>Version: 1.0</Text>
                <Text>Website: https://naszpolskidom.azurewebsites.net/</Text>
                <Text>
                    Home Square helps you buy, sell or rent apartments and houses. Our
                    real estate agents make the entire process easy from beginning to end.
                </Text>
            </View>
        );
    }
}

export default About;
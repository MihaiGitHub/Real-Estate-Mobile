import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Scene, Router, Actions } from 'react-native-router-flux';

class MyProfile extends Component {

    render() {
        return (
            <View>
                <ListItem
                    key="1"
                    title="About"
                    leftIcon={{ name: "info" }}
                    onPress={() => Actions.about()}
                />
                <ListItem
                    key="2"
                    title="Privacy Policy"
                    leftIcon={{ name: "find-in-page" }}
                    onPress={() => Actions.privacy()}
                />
                <ListItem
                    key="3"
                    title="Terms of Use"
                    leftIcon={{ name: "description" }}
                    onPress={() => Actions.terms()}
                />
            </View>
        );
    }
}

export default MyProfile;
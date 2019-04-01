import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements'

import { Scene, Router, Actions } from 'react-native-router-flux';


const list = [
    {
        title: 'About',
        icon: 'info'
    },
    {
      title: 'Privacy Policy',
      icon: 'find-in-page'
    },
    {
      title: 'Terms of Use',
      icon: 'description'
    },
]

class MyProfile extends Component {

    onPress = (name) => {
        console.log(name);
    }

    render() {

        return (
            <View>
            {
                list.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon }}
               //     onPress={() => this.onPress(item.title)}
                    onPress={() => Actions.about()}
                />
                ))
            }
            </View>
        );
    }
}

export default MyProfile;
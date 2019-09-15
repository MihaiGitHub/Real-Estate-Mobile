import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, Container, Header, Content, List, ListItem, Text, Left, Body, Right, Switch } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";

class MyProfile extends Component {
    render() {
        return (
            <Container>
                <Content>
                <ListItem icon onPress={() => Actions.about()}>
                    <Left>
                        <Icon name={"md-information-circle"} size={25} />
                    </Left>
                    <Body>
                        <Text>About</Text>
                    </Body>
                    <Right>
                        <Icon active name="md-arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.privacy()}>
                    <Left>
                        <Icon name={"md-paper"} size={25} />
                    </Left>
                    <Body>
                        <Text>Privacy Policy</Text>
                    </Body>
                    <Right>
                        <Icon active name="md-arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.terms()}>
                    <Left>
                        <Icon name={"md-book"} size={25} />
                    </Left>
                    <Body>
                        <Text>Terms of Use</Text>
                    </Body>
                    <Right>
                        <Icon active name="md-arrow-forward" />
                    </Right>
                </ListItem>
                </Content>
            </Container>
        );
    }
}

export default MyProfile;
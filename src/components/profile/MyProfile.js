import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, Container, Header, Content, List, ListItem, Text, Left, Body, Right, Switch } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";

class MyProfile extends Component {
    render() {
        return (
            <Container>
                <Content>
                <ListItem icon onPress={() => Actions.about()}>
                    <Left>
                        <Icon name={"info-circle"} size={25} />
                    </Left>
                    <Body>
                        <Text>About</Text>
                    </Body>
                    <Right>
                        <Icon name={"arrow-right"} size={25} />
                    </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.settings()}>
                    <Left>
                        <Icon name={"cog"} size={25} />
                    </Left>
                    <Body>
                        <Text>Settings</Text>
                    </Body>
                    <Right>
                        <Icon name={"arrow-right"} size={25} />
                    </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.privacy()}>
                    <Left>
                        <Icon name={"book"} size={25} />
                    </Left>
                    <Body>
                        <Text>Privacy Policy</Text>
                    </Body>
                    <Right>
                        <Icon name={"arrow-right"} size={25} />
                    </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.terms()}>
                    <Left>
                        <Icon name={"list-alt"} size={25} />
                    </Left>
                    <Body>
                        <Text>Terms of Use</Text>
                    </Body>
                    <Right>
                        <Icon name={"arrow-right"} size={25} />
                    </Right>
                </ListItem>
                </Content>
            </Container>
        );
    }
}

export default MyProfile;
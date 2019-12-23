import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, Container, Header, Content, List, ListItem, Text, Left, Body, Right, Switch } from 'native-base';
import Ionicon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

class MyProfile extends Component {
    render() {
        return (
            <Container>
                <Content>
                <ListItem icon onPress={() => Actions.about()}>
                    <Left>
                        <Icon name={"info-circle"} size={24} />
                    </Left>
                    <Body>
                        <Text style={styles.text}>About</Text>
                    </Body>
                    <Right>
                        <Ionicon active name="md-arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.settings()}>
                    <Left>
                        <Icon name={"cog"} size={23} />
                    </Left>
                    <Body>
                        <Text style={styles.text}>Settings</Text>
                    </Body>
                    <Right>
                        <Ionicon active name="md-arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.privacy()}>
                    <Left>
                        <Icon name={"book"} size={21} />
                    </Left>
                    <Body>
                        <Text style={styles.text}>Privacy Policy</Text>
                    </Body>
                    <Right>
                        <Ionicon active name="md-arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.terms()}>
                    <Left>
                        <Icon name={"list-alt"} size={19} />
                    </Left>
                    <Body>
                        <Text style={styles.text}>Terms of Use</Text>
                    </Body>
                    <Right>
                        <Ionicon active name="md-arrow-forward" />
                    </Right>
                </ListItem>
                </Content>
            </Container>
        );
    }
}

const styles = {
    text: {
        fontFamily: 'OpenSans-Regular'
    }
}

export default MyProfile;
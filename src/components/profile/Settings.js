import React, { Component } from "react";
import { ListItem, CheckBox, Container, Header, Content, Card, CardItem, Text, Left, Body, Right } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

class Settings extends Component {

    render() {
        return (
        <Container>
            <Content>
                <ListItem icon onPress={() => Actions.about()}>
                    <Left>
                        <Icon name={"bell"} size={25} />
                    </Left>
                    <Body>
                        <Text>Notifications</Text>
                    </Body>
                    <Right>
                        <CheckBox checked={true} color="green"/>
                    </Right>
                </ListItem>
            </Content>
        </Container>
        );
    }
}

export default Settings;
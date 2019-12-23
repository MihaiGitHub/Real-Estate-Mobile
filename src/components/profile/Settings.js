import React, { Component } from "react";
import { ListItem, CheckBox, Container, Header, Content, Card, CardItem, Text, Left, Body, Right } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

class Settings extends Component {

    render() {
        return (
        <Container>
            <Content>
                <ListItem icon>
                    <Left>
                        <Icon name={"bell"} size={25} />
                    </Left>
                    <Body>
                        <Text style={styles.text}>Notifications</Text>
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

const styles = {
    text: {
        fontFamily: 'OpenSans-Regular'
    }
}

export default Settings;
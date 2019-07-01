import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

class PrivacyPolicy extends Component {

    render() {
        return (
            <Container>
                <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text>Privacy Policy</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text>
                        We may use, store, and process personal information to (1) provide, understand, improve, and develop the HomeSquare Platform, 
                        (2) create and maintain a trusted and safer environment and (3) provide, personalize, measure, and improve our advertising and marketing.</Text>
                    </Body>
                    </CardItem>
                    <CardItem footer bordered>
                    <Text></Text>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}

export default PrivacyPolicy;
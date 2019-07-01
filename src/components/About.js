import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

class About extends Component {

    render() {
        return (
            <Container>
                <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text>Title: Home Square Real Estate</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={{ marginBottom: 5 }}>
                            Home Square helps you buy, sell or rent apartments and houses. 
                            Our real estate agents make the entire process easy from beginning to end.
                        </Text>
                        <Text>Website:</Text>
                        <Text>https://naszpolskidom.azurewebsites.net/</Text>
                    </Body>
                    </CardItem>
                    <CardItem footer bordered>
                    <Text>Version: 1.0</Text>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}

export default About;
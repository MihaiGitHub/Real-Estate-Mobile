import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

class About extends Component {

    render() {
        return (
            <Container>
                <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text style={styles.text2}>Title: Home Square Real Estate</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={styles.text}>
                            Home Square helps you buy, sell or rent apartments and houses. 
                            Our real estate agents make the entire process easy from beginning to end.
                        </Text>
                        <Text style={styles.text2}>Website:</Text>
                        <Text style={styles.text2}>https://naszpolskidom.azurewebsites.net/</Text>
                    </Body>
                    </CardItem>
                    <CardItem footer bordered>
                    <Text style={styles.text2}>Version: 1.0</Text>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}

const styles = {
    text: {
        fontFamily: 'OpenSans-Regular',
        marginBottom: 5 
    },
    text2: {
        fontFamily: 'OpenSans-Regular' 
    }
}

export default About;
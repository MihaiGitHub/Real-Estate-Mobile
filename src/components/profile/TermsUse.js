import React, { Component } from "react";
import { StyleProvider, Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
//import getTheme from '../../native-base-theme/components/index';
//import material from './native-base-theme/variables/platform';

class TermsUse extends Component {

    render() {
        return (
            <Container>
                <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text style={styles.text}>Terms of Use</Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body>
                        <Text style={styles.text}>
                        The HomeSquare Platform is an online marketplace that enables users to publish properties for sale or return
                        </Text>
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

const styles = {
    text: {
        fontFamily: 'OpenSans-Regular'
    }
}

export default TermsUse;
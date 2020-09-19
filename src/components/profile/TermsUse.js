import React, { Component } from "react";
import {
  StyleProvider,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from "native-base";

class TermsUse extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Terms of Use</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  The Our House Platform is an online marketplace that enables
                  users to publish properties for sale or return
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

export default TermsUse;

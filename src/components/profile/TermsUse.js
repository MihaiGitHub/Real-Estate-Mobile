import React from "react";
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

const TermsUse = () => {
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
                1. The use of the app takes place using the ICT system. To use
                the Website, it is necessary to have a device with access to the
                Internet and a web browser.
              </Text>
              <Text>
                2. Before registering, the User or the Partner is required to
                read the Regulations, Privacy Policy and Cookies and accept
                them.
              </Text>
              <Text>
                3. The content of the app is the property of the Service
                Provider and is legally protected.
              </Text>
              <Text>
                4. The Service Provider provides the Service by enabling the
                publication of advertisements on the app's website.
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
};

export default TermsUse;

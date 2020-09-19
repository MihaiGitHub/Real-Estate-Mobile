import React, { useEffect } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
} from "native-base";
import GLOBALS from "../common/Globals";
//import SCREEN_IMPORT from 'Dimensions';
import { agentFetch } from "../../actions";
import { Spinner } from "../common/Spinner";
import TextMessage from "../common/TextMessage";
import PhoneCall from "../common/PhoneCall";

//const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width;

const AgentDetail = (props) => {
  useEffect(() => {
    props.agentFetch(props.id);
  }, []);

  if (props.loadingAgent) {
    return <Spinner size="large" />;
  }

  let image = "";

  if (props.agent.picture) {
    image = `${GLOBALS.TEMP_IMAGE_PATH}/${props.agent.picture}`;
  } else {
    image = `${GLOBALS.TEMP_IMAGE_PATH}/dashboard/img/profile.jpg`;
  }

  return (
    <Container>
      <Content>
        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Body>
                <Text>
                  {props.agent.fname} {props.agent.lname}
                </Text>
                <Text note>Certified Agent</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={styles.body}>
              <Image source={{ uri: image }} style={styles.image} />

              <TextMessage
                {...props}
                btnWidth="49%"
                phoneNumber={props.agent.phone}
              />

              <PhoneCall
                {...props}
                btnWidth="49%"
                phoneNumber={props.agent.phone}
              />

              <Text style={styles.text}>
                License #: {props.agent.license_number}
              </Text>

              <Text style={styles.text}>About {props.agent.fname}</Text>

              <Text>{props.agent.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = {
  card: {
    flex: 0,
  },
  body: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 5,
  },
  text: {
    fontSize: 19,
    paddingBottom: 5,
    paddingTop: 5,
    minWidth: "100%",
    fontWeight: "400",
  },
};

const mapStateToProps = (state) => {
  const { agent, loadingAgent } = state.agents;

  return { agent, loadingAgent };
};

export default connect(mapStateToProps, { agentFetch })(AgentDetail);

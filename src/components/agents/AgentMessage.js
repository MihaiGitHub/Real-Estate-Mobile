import React, { useState } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Body,
  Textarea,
  Form,
} from "native-base";
import { Actions } from "react-native-router-flux";
import { saveMessage } from "../../actions/AgentsActions";

const AgentMessage = ({ data }) => {
  const [message, setMessage] = useState("");

  const handlePress = () => {
    saveMessage(data, message).then(() => Actions.pop());
  };

  return (
    <Container>
      <Content padder>
        <Form>
          <Textarea
            onChangeText={(text) => setMessage(text)}
            rowSpan={5}
            bordered
            placeholder="Type message here"
          />

          <Button block primary onPress={handlePress} style={styles.messageBtn}>
            <Text>SUBMIT</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = {
  messageBtn: {
    marginTop: 5,
    width: "100%",
    borderRadius: 5,
    textAlign: "center",
  },
};

export default AgentMessage;

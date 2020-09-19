import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import GLOBALS from "../common/Globals";
import { agentsFetch } from "../../actions";
import { Spinner } from "../common/Spinner";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Text,
} from "native-base";

const AgentList = (props) => {
  useEffect(() => {
    props.agentsFetch();
  }, []);

  const renderList = () => {
    return props.list.map((agent) => {
      return (
        <ListItem
          avatar
          key={agent.id}
          onPress={() => Actions.agentDetail({ id: agent.id })}
        >
          <Left>
            <Thumbnail
              source={{
                uri:
                  agent.picture == ""
                    ? `${GLOBALS.TEMP_IMAGE_PATH}/dashboard/img/profile.jpg`
                    : `${GLOBALS.TEMP_IMAGE_PATH}/${agent.picture}`,
              }}
            />
          </Left>
          <Body>
            <Text>
              {agent.fname} {agent.lname}
            </Text>
            <Text note>Certified Agent</Text>
          </Body>
        </ListItem>
      );
    });
  };

  if (props.loading) {
    return <Spinner size="large" />;
  }

  return (
    <Container>
      <Content>
        <List>{renderList()}</List>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { list, loading } = state.agents;

  return { list, loading };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { agentsFetch })(AgentList);

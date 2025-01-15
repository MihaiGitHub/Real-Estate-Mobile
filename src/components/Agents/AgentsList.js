import React, { useEffect } from "react";
import { TouchableHighlight, ToastAndroid } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  FlatList,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
} from "native-base";
import { agentsFetch } from "../../actions/AgentsActions";
import GLOBALS from "../Common/Globals";
import { useNavigation } from "@react-navigation/native";
import { Spinner } from "../Common/Spinner";

export function AgentsList() {
  const { agentsUSRealEstate, agentsDB } = useSelector((state) => state.agents);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(agentsFetch());
  }, []);

  if (agentsDB.length === 0 && agentsUSRealEstate.length === 0) {
    return <Spinner size="large" />;
  }

  const renderAgentsDB = () => {
    if (Array.isArray(agentsDB) && agentsDB.length > 0) {
      return (
        <FlatList
          data={agentsDB}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              key={item.id}
              onPress={() =>
                navigation.navigate("Agent Info", {
                  item,
                })
              }
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "gray.600",
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={3} justifyContent="space-between">
                  <Avatar
                    size="48px"
                    source={{
                      uri: `${GLOBALS.IMAGE_PATH_AWS}${item.picture}`,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.fname} {item.lname}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.business_name}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    } else {
      ToastAndroid.show(
        "No agents found near this location!",
        ToastAndroid.LONG
      );
    }
  };

  const renderAgentsUSRealEstate = () => {
    if (Array.isArray(agentsUSRealEstate) && agentsUSRealEstate.length > 0) {
      return (
        <FlatList
          data={agentsUSRealEstate}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              key={item.id}
              onPress={() =>
                navigation.navigate("Agent Info", {
                  item,
                })
              }
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "gray.600",
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={3} justifyContent="space-between">
                  <Avatar
                    size="48px"
                    source={{
                      uri: `${item.photo.href}`,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.full_name}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.broker.name}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.advertiser_id.toString()}
        />
      );
    } else {
      ToastAndroid.show(
        "No agents found near this location!",
        ToastAndroid.LONG
      );
    }
  };

  return (
    <Box style={{ marginBottom: 70 }}>
      {agentsDB && agentsDB.length > 0 && renderAgentsDB()}
      {agentsUSRealEstate &&
        agentsUSRealEstate.length > 0 &&
        renderAgentsUSRealEstate()}
    </Box>
  );
}

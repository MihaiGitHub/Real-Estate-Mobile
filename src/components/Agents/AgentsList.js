import React, { useEffect } from "react";
import { TouchableHighlight } from "react-native";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { agentsFetch } from "../../actions/AgentsActions";
//import GLOBALS from "../Common/Globals";
import GLOBALS from "../Common/Globals";
import { useNavigation } from "@react-navigation/native";
import { Spinner } from "../Common/Spinner";

export function AgentsList() {
  const agents = useSelector((state) => state.agents.agentsFiltered);
  const agentsDB = useSelector((state) => state.agents.agentsDB);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  console.log("Agents ", agents);
  console.log("AgentsDB ", agentsDB);

  useEffect(() => {
    dispatch(agentsFetch());
  }, []);

  if (agentsDB.length === 0 && agents.length === 0) {
    return <Spinner size="large" />;
  }

  return (
    <Box>
      {agentsDB && agentsDB.length > 0 && (
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
                      uri: `${GLOBALS.TEMP_IMAGE_PATH}${item.picture}`,
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
      )}

      {agents && agents.length > 0 && (
        <FlatList
          data={agents}
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
      )}
    </Box>
  );
}

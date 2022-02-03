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
import GLOBALS from "../Common/Globals";

export function AgentsList({ navigation }) {
  const agents = useSelector((state) => state.agents.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(agentsFetch());
  }, []);

  console.log("Redux store  ", agents);

  const obj = {
    avatar: "http://homesquare.epizy.com/dashboard/uploads/3/profile/8_6.jpg",
  };

  return (
    <Box>
      <FlatList
        data={agents}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.id}
            onPress={() =>
              navigation.navigate("AgentView", {
                item,
              })
            }
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <Box
              onPress={() => navigation.navigate("AgentView")}
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
                {/* <Text>
                  {GLOBALS.TEMP_IMAGE_PATH}
                  {item.picture}
                </Text> */}
                <Avatar
                  size="48px"
                  source={{
                    // uri: obj.avatar,
                    // uri: "http://homesquare.epizy.com/dashboard/uploads/3/profile/8_6.jpg",
                    //  uri: `${GLOBALS.TEMP_IMAGE_PATH}${item.picture}`,
                    //  uri: TEMP_IMAGE_PATH + item.picture,
                    uri: "https://ssl.cdn-redfin.com/system_files/images/21057/640x460/6_93.jpg",
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
    </Box>
  );
}

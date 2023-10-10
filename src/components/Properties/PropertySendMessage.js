import React, { useState } from "react";
import { Box, Button, TextArea, HStack, VStack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
// import { saveMessage } from "../../actions/AgentsActions";

export function PropertySendMessage({ route }) {
  // const { id, pid } = route.params;
  const navigation = useNavigation();
  const [message, setMessage] = useState("");

  const handlePress = () => {
    // navigation.navigate("Property Info", { id: pid })
    // saveMessage(id, message).then(() =>
    //   navigation.navigate("Property Info", { id: pid })
    // );
  };

  return (
    <VStack space="4">
      <Box alignItems="center" w="100%">
        <TextArea
          onChangeText={(text) => setMessage(text)}
          style={{
            backgroundColor: "#fff",
            marginTop: 5,
            textAlign: "center",
          }}
          placeholder="Type message here"
          w="95%"
          h="200"
        />
      </Box>
      <HStack alignItems="center" space={1} justifyContent="space-between">
        <Button
          title="Send Agent Message"
          onPress={handlePress}
          style={{
            flex: 1,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          Send Message
        </Button>
      </HStack>
    </VStack>
  );
}

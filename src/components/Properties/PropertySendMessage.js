import React from "react";
import { Box, Button, TextArea, HStack, VStack } from "native-base";

export function PropertySendMessage({ route }) {
  const { id } = route.params;

  return (
    <VStack space="4">
      <Box alignItems="center" w="100%">
        <TextArea
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
          // onPress={() =>
          //   navigation.navigate("Property Send Message", {
          //     id: property.user.id,
          //   })
          // }
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

import React from "react";
import { Switch, HStack, Text, Center, NativeBaseProvider } from "native-base";

export function Settings({ navigation }) {
  return (
    <Center flex={1} px="3">
      <HStack alignItems="center" space={16}>
        <Text fontSize="lg">Notifications</Text>
        <Switch />
      </HStack>
    </Center>
  );
}

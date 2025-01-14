import React from "react";
import { VStack, Input, Icon } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function NavBarSearchAgents() {
  const navigation = useNavigation();

  return (
    <VStack w="100%" minWidth={"100%"}>
      <Input
        onPressIn={() => navigation.navigate("Agent Search")}
        placeholder={"Search agents"}
        width="92%"
        borderRadius="4"
        variant={"unstyled"}
        fontSize="14"
        InputLeftElement={
          <Icon
            ml="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
        InputRightElement={
          <Icon
            mr="3"
            size="6"
            color="gray.400"
            as={<Ionicons name="filter" />}
          />
        }
      />
    </VStack>
  );
}

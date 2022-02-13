import React from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export function NavBarSearch() {
  return (
    // <VStack w="90%">
    <VStack w="100%" alignSelf="center">
      <Input
        //  ml={0}
        mr={8}
        alignSelf="center"
        placeholder="Search"
        width="100%"
        borderRadius="4"
        py="3"
        px="1"
        fontSize="14"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
        InputRightElement={
          <Icon
            m="2"
            mr="6"
            size="6"
            color="gray.400"
            as={<Ionicons name="filter" />}
          />
        }
      />
    </VStack>
    // </VStack>
  );
}

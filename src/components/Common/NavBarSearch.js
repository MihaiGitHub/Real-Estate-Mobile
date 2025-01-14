import React from "react";
import { VStack, Input, Icon } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export function NavBarSearch() {
  const navigation = useNavigation();
  const { searchTerm } = useSelector((state) => state.properties);

  console.log("Navbar");

  return (
    <VStack w="100%" minWidth={"100%"}>
      <Input
        bg="transparent"
        onPressIn={() => navigation.navigate("Property Search")}
        placeholder={searchTerm !== "" ? searchTerm : "Search properties"}
        width="92%"
        borderRadius="4"
        variant={"underlined"}
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

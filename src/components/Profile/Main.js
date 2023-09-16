import React from "react";
import { TouchableHighlight } from "react-native";
import { Box, FlatList, HStack, VStack, Text, Heading } from "native-base";
import { useNavigation } from "@react-navigation/native";

export function Main() {
  const navigation = useNavigation();

  const data = [
    {
      id: "1",
      title: "About",
      nav: "About",
    },
    {
      id: "2",
      title: "Privacy Policy",
      nav: "Privacy Policy",
    },
    {
      id: "3",
      title: "Terms of Use",
      nav: "Terms of Use",
    },
  ];

  const data2 = [
    {
      id: "1",
      title: "Payment Calculator",
      nav: "Payment Calculator",
    },
    {
      id: "2",
      title: "Affordability Calculator",
      nav: "Affordability Calculator",
    },
  ];

  return (
    <Box>
      <Heading size="md" style={{ paddingTop: 15, paddingLeft: 5 }}>
        Century Homes
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.id}
            onPress={() => navigation.navigate(item.nav)}
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
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.title}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.id}
      />
      <Heading size="md" style={{ paddingTop: 30, paddingLeft: 5 }}>
        Home Loans and Refinancing
      </Heading>{" "}
      <FlatList
        data={data2}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.id}
            onPress={() => navigation.navigate(item.nav)}
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
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.title}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

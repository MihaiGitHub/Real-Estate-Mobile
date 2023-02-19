import React from "react";
import { TouchableHighlight } from "react-native";
import { Box, FlatList, HStack, VStack, Text, Heading } from "native-base";

export function Main({ navigation }) {
  const data = [
    {
      id: "1",
      title: "About",
      nav: "About",
    },
    {
      id: "2",
      title: "Privacy Policy",
      nav: "PrivacyPolicy",
    },
    {
      id: "3",
      title: "Terms of Use",
      nav: "TermsUse",
    },
  ];

  const data2 = [
    {
      id: "1",
      title: "Home Loans",
      nav: "PaymentCalculator",
    },
    {
      id: "2",
      title: "Payment Calculator",
      nav: "PaymentCalculator",
    },
    {
      id: "3",
      title: "Affordability Calculator",
      nav: "PaymentCalculator",
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

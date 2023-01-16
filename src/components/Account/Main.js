import React from "react";
import { TouchableHighlight } from "react-native";
import { Box, FlatList, HStack, VStack, Text } from "native-base";

export function Main({ navigation }) {
  const data = [
    {
      id: "1",
      title: "Settings",
      nav: "Settings",
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

  return (
    <Box>
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
    </Box>
  );
}

import React, { useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export function AgentView({ route }) {
  const { item } = route.params;

  console.log("item ", item);

  return (
    <Box alignItems="center">
      <ScrollView>
        <Box
          maxW="500"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://ssl.cdn-redfin.com/system_files/images/21057/640x460/6_93.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              Licensed Agent
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {item.fname} {item.lname}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {item.business_name}
              </Text>
            </Stack>
            <Text fontWeight="400">{item.description}</Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <Button
                style={{ flex: 0.35 }}
                leftIcon={
                  <FontAwesome name="whatsapp" size={24} color="black" />
                }
              >
                WhatsApp
              </Button>
              <Button
                style={{ flex: 0.35 }}
                leftIcon={
                  <MaterialIcons name="textsms" size={24} color="black" />
                }
              >
                Text
              </Button>
              <Button
                style={{ flex: 0.35 }}
                leftIcon={
                  <Ionicons name="call-outline" size={24} color="black" />
                }
              >
                Call
              </Button>
              {/* <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  
                </Text>
              </HStack> */}
            </HStack>
          </Stack>
        </Box>
      </ScrollView>
    </Box>
  );
}

import React, { useEffect } from "react";
import { Linking } from "react-native";
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
import Communications from "react-native-communications";
import GLOBALS from "../Common/Globals";

export function AgentView({ route }) {
  const { item } = route.params;

  console.log("item ", item);

  const initiateWhatsApp = (message, number) => {
    // Check for perfect 10 digit length
    // if (mobileNumber.length != 10) {
    //   alert("Please insert correct WhatsApp number");
    //   return;
    // }

    let url = "whatsapp://send?text=" + message + "&phone=1" + number;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  const initiatePhoneCall = (number) => {
    // Check for perfect 10 digit length
    // if (mobileNumber.length != 10) {
    //   alert("Please insert correct WhatsApp number");
    //   return;
    // }

    let url = "tel:" + number;

    Linking.openURL(url)
      .then((data) => {
        console.log("Phone Opened");
      })
      .catch(() => {
        alert("Make sure phone calls are working on device");
      });
  };

  const phone = item.phone ? item.phone : item.phones[0]["number"];

  return (
    <ScrollView>
      <Box alignItems="center" style={{ marginBottom: 70 }}>
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
            <AspectRatio w="100%" ratio={16 / 14}>
              <Image
                style={{ paddingTop: "25px", marginTop: "25px" }}
                source={{
                  uri: item.advertiser_id
                    ? `${item.photo.href}`
                    : `${GLOBALS.TEMP_IMAGE_PATH}${item.picture}`,
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
                {item.first_name ? item.first_name : item.fname}
                {item.last_name ? item.last_name : item.lname}
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
                {item.business_name ? item.business_name : item.broker.name}
              </Text>
            </Stack>
            <Text fontWeight="400">{item.description}</Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <Button
                onPress={() =>
                  initiateWhatsApp("I want to inquire about a property", phone)
                }
                style={{ flex: 0.35 }}
                leftIcon={
                  <FontAwesome name="whatsapp" size={24} color="black" />
                }
              >
                WhatsApp
              </Button>
              <Button
                onPress={() => Communications.text(phone)}
                style={{ flex: 0.35 }}
                leftIcon={
                  <MaterialIcons name="textsms" size={24} color="black" />
                }
              >
                Text
              </Button>
              <Button
                onPress={() => initiatePhoneCall(phone)}
                style={{ flex: 0.35 }}
                leftIcon={
                  <Ionicons name="call-outline" size={24} color="black" />
                }
              >
                Call
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </ScrollView>
  );
}

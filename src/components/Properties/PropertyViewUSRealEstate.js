import React, { useEffect, useState } from "react";
import { View, Linking } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Stack,
  Image,
  Spacer,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ImageGallery } from "@georstat/react-native-image-gallery";
import getDirections from "react-native-google-maps-directions";
//import { SliderBox } from "react-native-image-slider-box";
import ImageCarousel from "./ImageCarousel";
// import { useNavigation } from "@react-navigation/native";
import { propertyUSRealEstateFetch } from "../../actions/PropertiesActions";
import { Spinner } from "../Common/Spinner";

import GLOBALS from "../Common/Globals";

export function PropertyViewUSRealEstate({ route }) {
  // const [propertyDB, setPropertyDB] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  // console.log("route ", route);

  const { id } = route.params;

  const { propertyUSRealEstate } = useSelector((state) => state.properties);

  useEffect(() => {
    dispatch(propertyUSRealEstateFetch(id));
  }, []);

  if (Object.entries(propertyUSRealEstate).length === 0) {
    return <Spinner size="large" />;
  }

  console.log("propertyUSRealEstate ", propertyUSRealEstate);

  let imageURLs = [];

  if (propertyUSRealEstate.photos) {
    imageURLs = propertyUSRealEstate.photos.map((image, index) => {
      return {
        id: index.toString(),
        thumbnail: image,
        url: image.href,
        title: image.description,
        description: "description",
      };
    });
  } else {
    imageURLs = [`${GLOBALS.TEMP_IMAGE_PATH}/dashboard/img/house.gif`];
  }

  //   // let agentImage = "";

  //   // if (props.property.user.picture) {
  //   //   agentImage = `${GLOBALS.TEMP_IMAGE_PATH}/${props.property.user.picture}`;
  //   // } else {
  //   //   agentImage = `${GLOBALS.TEMP_IMAGE_PATH}/dashboard/img/profile.jpg`;
  //   // }

  const mapLatitude = parseFloat(
    propertyUSRealEstate.address?.boundary?.coordinates[1],
    10
  );

  const mapLongitude = parseFloat(
    propertyUSRealEstate.address?.boundary?.coordinates[0],
    10
  );

  const initiateUber = () => {
    let url = `uber://?action=setPickup&dropoff[latitude]=${mapLatitude}&dropoff[longitude]=${mapLongitude}`;

    Linking.openURL(url)
      .then((data) => {
        console.log("Uber Opened");
      })
      .catch(() => {
        alert("Make sure Uber is installed on your device");
      });
  };

  const handleGetDirections = () => {
    const data = {
      destination: {
        latitude: mapLatitude,
        longitude: mapLongitude,
      },
      params: [
        {
          key: "travelmode",
          value: "driving", // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate", // this instantly initializes navigation using the given travel mode
        },
      ],
    };

    getDirections(data);
  };

  const handleFeatures = () => {
    if (propertyUSRealEstate.search_tags) {
      //  let features = property.features.split(",");
      let features = propertyUSRealEstate.search_tags;

      if (features.length > 1) {
        return (
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <HStack space={5} justifyContent="center">
              {features.map((feature, index) => {
                <Text
                  key={index}
                  style={{
                    flex: 0.4,
                    marginLeft: 15,
                  }}
                >
                  - {feature.replaceAll("_", " ")}
                </Text>;
              })}
              {/* {features[0] && (
                <Text
                  style={{
                    flex: 0.4,
                    marginLeft: 15,
                  }}
                >
                  - {features[0].replaceAll("_", " ")}
                </Text>
              )} */}
              {/* {features[1] && (
                  <Text
                    style={{
                      flex: 0.4,
                    }}
                  >
                    - {features[1].replaceAll("_", " ")}
                  </Text>
                )}
                {features[2] && (
                  <Text
                    style={{
                      flex: 0.4,
                    }}
                  >
                    - {features[2].replaceAll("_", " ")}
                  </Text>
                )} */}
            </HStack>
          </HStack>
        );
      }
      return (
        <HStack alignItems="center" space={1} justifyContent="space-between">
          <HStack space={5} justifyContent="center">
            <Text
              style={{
                flex: 1,
                marginLeft: 15,
              }}
            >
              No features to display
            </Text>
          </HStack>
        </HStack>
      );
    }
  };

  return (
    <Box border="1" borderRadius="md">
      <ScrollView>
        <VStack space="4">
          <Box>
            <ImageCarousel data={imageURLs} openGallery={openGallery} />
          </Box>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Button
              title="View Map"
              // onPress={() =>
              //   navigation.navigate("Property Map", {
              //     latitude: mapLatitude,
              //     longitude: mapLongitude,
              //   })
              // }
              style={{ flex: 0.4, marginLeft: 15 }}
              leftIcon={
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  size={24}
                  color="black"
                />
              }
            >
              View Map
            </Button>
            <Button
              title="Get Directions"
              onPress={() => handleGetDirections()}
              style={{ flex: 0.5 }}
              leftIcon={
                <FontAwesome5 name="directions" size={24} color="black" />
              }
            >
              Get Directions
            </Button>
            <Button
              title="Uber"
              onPress={() => initiateUber()}
              style={{ flex: 0.4, marginRight: 15 }}
              leftIcon={<FontAwesome5 name="uber" size={24} color="black" />}
            >
              Uber
            </Button>
          </HStack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Text
              style={{
                flex: 0.36,
                marginLeft: 15,
                fontSize: 24,
                paddingTop: 10,
              }}
            >
              ${propertyUSRealEstate.prop_common?.price}
            </Text>
            <Text style={{ flex: 0.36 }}>
              {propertyUSRealEstate.prop_common?.bed} Beds{" "}
              {propertyUSRealEstate.prop_common?.bath} Baths
            </Text>
          </HStack>
          {/* <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                flex: 1,
                marginLeft: 15,
                fontSize: 20,
              }}
            >
              Features
            </Text>
          </HStack> */}
          {/* {handleFeatures()} */}
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                flex: 1,
                marginLeft: 15,
                fontSize: 20,
              }}
            >
              About this home
            </Text>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                flex: 1,
                marginLeft: 15,
              }}
            >
              {propertyUSRealEstate.prop_common?.description}
            </Text>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                flex: 1,
                marginLeft: 15,
                fontSize: 20,
              }}
            >
              {/* Contact Agent - {property.user.fname} {property.user.lname} */}
            </Text>
          </HStack>

          <HStack alignItems="center" space={1} justifyContent="space-between">
            {/* <AspectRatio w="100%" ratio={16 / 14}>
              <Image
                style={{ paddingTop: "25px", marginTop: "25px" }}
                source={{
                  uri: `${GLOBALS.TEMP_IMAGE_PATH}${property.user.picture}`,
                }}
                alt="image"
              />
            </AspectRatio> */}
          </HStack>

          {/*No send message to API agent yet <HStack alignItems="center" space={1} justifyContent="space-between">
            <Button
              title="Send Agent Message"
              onPress={() =>
                navigation.navigate("Property Send Message", {
                  id: property.user.id,
                  pid: property.id,
                })
              }
              style={{
                flex: 1,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 100,
              }}
            >
              Send Message
            </Button>
          </HStack> */}
        </VStack>
        <ImageGallery close={closeGallery} isOpen={isOpen} images={imageURLs} />
      </ScrollView>
    </Box>
  );
}

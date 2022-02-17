import React, { useEffect, useState } from "react";
import { View, Linking } from "react-native";
import { useSelector, useDispatch, ReactReduxContext } from "react-redux";
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
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

export function PropertyView({ route }) {
  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  const navigation = useNavigation();

  const { id } = route.params;

  const { list } = useSelector((state) => state.properties);
  //const dispatch = useDispatch();

  const property = list.find((x) => x.id === id);

  // if (images.length === 0) {
  //    imageURLs = [`${GLOBALS.TEMP_IMAGE_PATH}/dashboard/img/house.gif`];
  // }

  // console.log("images ", property.images);

  // const imageURLs = property.images.map((image, index) => ({
  //   URI: image,
  //   thumbnail: image,
  //   id: index + 1,
  //   title: "",
  //   description: "",
  // }));

  const imageURLs2 = property.images.map((image, index) => {
    console.log("image ", image);

    return {
      url: image,
      thumbnail: image,
      id: index.toString(),
      title: "",
      description: "",
    };
  });

  const imageURLs = property.images.map((image, index) => {
    return image;
  });

  console.log("imageURLs ", imageURLs);

  // console.log("property ", property);

  // let agentImage = "";

  // if (props.property.user.picture) {
  //   agentImage = `${GLOBALS.TEMP_IMAGE_PATH}/${props.property.user.picture}`;
  // } else {
  //   agentImage = `${GLOBALS.TEMP_IMAGE_PATH}/dashboard/img/profile.jpg`;
  // }

  useEffect(() => {
    // dispatch(findPropertyById(id));
  }, []);

  const handleGetDirections = () => {
    const data = {
      destination: {
        latitude: parseFloat(property.lat, 10),
        longitude: parseFloat(property.lng, 10),
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
    if (property.features) {
      let features = property.features.split(",");

      for (let i = 0; i < features.length; i++) {
        return (
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <HStack space={3} justifyContent="center">
              <Text>-{features[i]}</Text>
              <Text>-{features[i + 1]}</Text>
            </HStack>
          </HStack>
        );
      }

      // return features.map((feature, index, array) => {
      //   return (
      //     <HStack alignItems="center" space={1} justifyContent="space-between">
      //       <HStack space={3} justifyContent="center">
      //         <Text>-{array[index]}</Text>
      //         <Text>-{array[index + 1]}</Text>
      //       </HStack>
      //     </HStack>
      //   );
      // });
    }
  };

  return (
    <Box border="1" borderRadius="md">
      <ScrollView>
        <VStack space="4">
          <Box>
            <SliderBox
              images={imageURLs}
              sliderBoxHeight={200}
              onCurrentImagePressed={(index) => {
                openGallery();
              }}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
            />
          </Box>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Button
              title="View Map"
              onPress={() =>
                navigation.navigate("Property Map", {
                  latitude: property.lat,
                  longitude: property.lng,
                })
              }
              style={{ flex: 0.4 }}
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
              style={{ flex: 0.4 }}
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
              ${property.price}
            </Text>
            <Text style={{ flex: 0.36 }}>
              {property.bedrooms} Beds 2 {property.baths} Baths
            </Text>
          </HStack>
          {handleFeatures()}

          <HStack alignItems="center" space={1} justifyContent="space-between">
            <HStack space={3} justifyContent="center">
              <Text>1111111</Text>
              <Text>2222222</Text>
            </HStack>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <HStack space={3} justifyContent="center">
              <Text>3333333</Text>
              <Text>4444444</Text>
            </HStack>
          </HStack>

          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                flex: 1,
                marginLeft: 15,
              }}
            >
              {property.description}
            </Text>
          </HStack>
        </VStack>
        <ImageGallery
          close={closeGallery}
          isOpen={isOpen}
          images={imageURLs2}
        />
      </ScrollView>
    </Box>
  );
}

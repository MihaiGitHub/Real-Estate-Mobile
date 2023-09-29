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
//import { SliderBox } from "react-native-image-slider-box";
import ImageCarousel from "./ImageCarousel";
import { useNavigation } from "@react-navigation/native";
import { propertyUSRealEstateFetch } from "../../actions/PropertiesActions";
import GLOBALS from "../Common/Globals";
import "intl";
import "intl/locale-data/jsonp/en"; // or any other locale you need

export function PropertyView({ route }) {
  const [propertyDB, setPropertyDB] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  const dollarUSLocale = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  console.log("route ", route);

  const { id } = route.params;

  const { list } = useSelector((state) => state.properties);

  const property = list.find((x) => x.id === id);

  console.log("PROPERTIES ", list);

  // useEffect(() => {
  //   if (list.length > 0) {
  //     const property = list.find((x) => x.id === id);
  //     setPropertyDB(property);
  //   } else {
  //     dispatch(propertyUSRealEstateFetch(id));
  //   }
  // }, []);

  // const property =
  //   list.length > 0
  //     ? list.find((x) => x.id === id)
  //     : propertiesUSRealEstate.find((x) => x.property_id === id);

  console.log("property ", property);
  // console.log("propertyUSRealEstate ", propertyUSRealEstate);

  // if (property.images.length === 0) {
  //   imageURLs = [`${GLOBALS.TEMP_IMAGE_PATH}/dashboard/img/house.gif`];
  // }

  const imageURLs = property.images.map((image, index) => {
    return {
      id: index.toString(),
      thumbnail: image,
      url: image.url,
      title: image.title,
      description: "description",
    };
  });

  //   // let agentImage = "";

  //   // if (props.property.user.picture) {
  //   //   agentImage = `${GLOBALS.TEMP_IMAGE_PATH}/${props.property.user.picture}`;
  //   // } else {
  //   //   agentImage = `${GLOBALS.TEMP_IMAGE_PATH}/dashboard/img/profile.jpg`;
  //   // }

  //   useEffect(() => {
  //     // dispatch(findPropertyById(id));
  //   }, []);

  const mapLatitude = parseFloat(property.lat, 10);

  const mapLongitude = parseFloat(property.lng, 10);

  const initiateUber = () => {
    let url = `uber://?action=setPickup&dropoff[latitude]=${mapLatitude}&dropoff[longitude]=${mapLongitude}`;

    Linking.openURL(url)
      .then((data) => {
        console.log("Uber Opened");
      })
      .catch(() => {
        alert("Make sure Uber installed on your device");
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

  // const handleFeatures = () => {
  //   if (property.features) {
  //     let features = property.features.split(",");

  //     if (features.length > 1) {
  //       return (
  //         <>
  //           <HStack
  //             alignItems="center"
  //             space={1}
  //             justifyContent="space-between"
  //           >
  //             <HStack space={5} justifyContent="center">
  //               {features[0] && (
  //                 <Text
  //                   style={{
  //                     flex: 0.4,
  //                     marginLeft: 15,
  //                   }}
  //                 >
  //                   - {features[0]}
  //                 </Text>
  //               )}
  //               {features[1] && (
  //                 <Text
  //                   style={{
  //                     flex: 0.4,
  //                   }}
  //                 >
  //                   - {features[1]}
  //                 </Text>
  //               )}
  //               {features[1] && (
  //                 <Text
  //                   style={{
  //                     flex: 0.4,
  //                   }}
  //                 >
  //                   - {features[2]}
  //                 </Text>
  //               )}
  //             </HStack>
  //           </HStack>
  //         </>
  //       );
  //     }
  //     return (
  //       <>
  //         <HStack alignItems="center" space={1} justifyContent="space-between">
  //           <HStack space={5} justifyContent="center">
  //             {features[0] && (
  //               <Text
  //                 style={{
  //                   flex: 1,
  //                   marginLeft: 15,
  //                 }}
  //               >
  //                 - {features[0]}
  //               </Text>
  //             )}
  //           </HStack>
  //         </HStack>
  //       </>
  //     );
  //   }

  //   if (property.tags) {
  //     if (property.tags.length > 1) {
  //       return (
  //         <>
  //           <HStack
  //             alignItems="center"
  //             space={1}
  //             justifyContent="space-between"
  //           >
  //             <HStack space={5} justifyContent="center">
  //               {property.tags[0] && (
  //                 <Text
  //                   style={{
  //                     flex: 0.4,
  //                     marginLeft: 15,
  //                   }}
  //                 >
  //                   - {property.tags[0].replaceAll("_", " ")}
  //                 </Text>
  //               )}
  //               {property.tags[1] && (
  //                 <Text
  //                   style={{
  //                     flex: 0.4,
  //                   }}
  //                 >
  //                   - {property.tags[1].replaceAll("_", " ")}
  //                 </Text>
  //               )}
  //               {property.tags[1] && (
  //                 <Text
  //                   style={{
  //                     flex: 0.4,
  //                   }}
  //                 >
  //                   - {property.tags[2].replaceAll("_", " ")}
  //                 </Text>
  //               )}
  //             </HStack>
  //           </HStack>
  //         </>
  //       );
  //     }
  //     return (
  //       <>
  //         <HStack alignItems="center" space={1} justifyContent="space-between">
  //           <HStack space={5} justifyContent="center">
  //             {features[0] && (
  //               <Text
  //                 style={{
  //                   flex: 1,
  //                   marginLeft: 15,
  //                 }}
  //               >
  //                 - {property.tags[0]}
  //               </Text>
  //             )}
  //           </HStack>
  //         </HStack>
  //       </>
  //     );
  //   }
  // };

  return (
    <Box border="1" borderRadius="md">
      <ScrollView>
        <VStack space="4">
          <Box>
            <ImageCarousel data={imageURLs} openGallery={openGallery} />
          </Box>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Text
              style={{
                marginLeft: 10,
                fontSize: 24,
                paddingTop: 10,
              }}
            >
              {dollarUSLocale.format(property.price)}
            </Text>
            <Text
              style={{
                textAlign: "right",
                marginRight: 10,
              }}
            >
              {property.bedrooms} Beds / {property.bathrooms} Baths
            </Text>
          </HStack>
          <HStack
            alignItems="center"
            space={4}
            justifyContent="space-between"
            mt="-4"
            p="0"
          >
            <Text
              style={{
                color: "grey",
                marginLeft: 10,
              }}
            >
              {property.address}
            </Text>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Button
              variant="outline"
              title="View Map"
              onPress={() =>
                navigation.navigate("Property Map", {
                  latitude: mapLatitude,
                  longitude: mapLongitude,
                })
              }
              style={{
                marginLeft: 10,
                flex: 1,
              }}
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
              variant="outline"
              title="Get Directions"
              onPress={() => handleGetDirections()}
              style={{
                flex: 1,
              }}
              leftIcon={
                <FontAwesome5 name="directions" size={24} color="black" />
              }
            >
              Get Directions
            </Button>
            <Button
              variant="outline"
              title="Uber"
              onPress={() => initiateUber()}
              style={{
                marginRight: 10,
                flex: 1,
              }}
              leftIcon={<FontAwesome5 name="uber" size={24} color="black" />}
            >
              Uber
            </Button>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
              }}
            >
              Key Details
            </Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            m="0"
            p="0"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Text>Property Status</Text>
            <Text>{property.property_status}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            mt="-3"
            p="0"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Text>Property Type</Text>
            <Text>{property.property_type}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            mt="-3"
            p="0"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Text>Land Area</Text>
            <Text>{property.land_area}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            mt="-3"
            p="0"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Text>Build Size</Text>
            <Text>{property.build_size}</Text>
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
                marginLeft: 10,
                fontSize: 20,
              }}
            >
              About this home
            </Text>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                marginLeft: 10,
              }}
            >
              {property.description}
            </Text>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
              }}
            >
              Contact Agent - {property.user.fname} {property.user.lname}
            </Text>
          </HStack>

          <HStack alignItems="center" space={1} justifyContent="space-between">
            <AspectRatio w="100%" ratio={16 / 14}>
              <Image
                style={{ paddingTop: "25px", marginTop: "25px" }}
                source={{
                  uri: `${GLOBALS.TEMP_IMAGE_PATH}${property.user.picture}`,
                }}
                alt="image"
              />
            </AspectRatio>
          </HStack>

          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Button
              title="Send Agent Message"
              // onPress={() =>
              //   navigation.navigate("Property Send Message", {
              //     id: property.user.id,
              //     pid: property.id,
              //   })
              // }
              style={{
                flex: 1,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 100,
              }}
            >
              Send Message
            </Button>
          </HStack>
        </VStack>
        <ImageGallery close={closeGallery} isOpen={isOpen} images={imageURLs} />
      </ScrollView>
    </Box>
  );
}

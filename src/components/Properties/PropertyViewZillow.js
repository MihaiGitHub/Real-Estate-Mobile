import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { propertyZillowFetch } from "../../actions/PropertiesActions";
import ImageCarousel from "./ImageCarousel";

export function PropertyViewZillow({ route }) {
  console.log("route ", route);
  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);

  const { id } = route.params;

  const { propertyZillow } = useSelector((state) => state.properties);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(propertyZillowFetch(id));
  }, []);

  console.log("zillowproperty ", propertyZillow);

  //   const imageURL = () => {
  //     return [
  //       {
  //         id: propertyZillow.zpid.toString(),
  //         //  thumbnail: image,
  //         url: propertyZillow.imgSrc,
  //         title: propertyZillow.streetAddress,
  //         description: "description",
  //       },
  //     ];
  //   };

  const imageURL = [
    {
      id: propertyZillow.zpid?.toString(),
      //  thumbnail: image,
      url: propertyZillow.imgSrc,
      title: propertyZillow.streetAddress,
      description: "description",
    },
  ];

  const handleFeatures = () => {
    if (propertyZillow.resoFacts) {
      if (propertyZillow.resoFacts.interiorFeatures !== null) {
        let features = propertyZillow.resoFacts.interiorFeatures;

        if (features.length > 1) {
          return (
            <>
              <HStack
                alignItems="center"
                space={1}
                justifyContent="space-between"
              >
                <HStack space={5} justifyContent="center">
                  {features[0] && (
                    <Text
                      style={{
                        flex: 0.4,
                        marginLeft: 15,
                      }}
                    >
                      -{features[0]}
                    </Text>
                  )}
                  {features[1] && (
                    <Text
                      style={{
                        flex: 0.4,
                      }}
                    >
                      -{features[1]}
                    </Text>
                  )}
                  {features[1] && (
                    <Text
                      style={{
                        flex: 0.4,
                      }}
                    >
                      -{features[2]}
                    </Text>
                  )}
                </HStack>
              </HStack>
            </>
          );
        }
        return (
          <>
            <HStack
              alignItems="center"
              space={1}
              justifyContent="space-between"
            >
              <HStack space={5} justifyContent="center">
                {features[0] && (
                  <Text
                    style={{
                      flex: 1,
                      marginLeft: 15,
                    }}
                  >
                    -{features[0]}
                  </Text>
                )}
              </HStack>
            </HStack>
          </>
        );
      }
    }
  };

  return (
    <Box border="1" borderRadius="md">
      <ScrollView>
        <VStack space="4">
          <Box>
            <ImageCarousel data={imageURL} openGallery={openGallery} />
          </Box>

          {/* <HStack alignItems="center" space={4} justifyContent="space-between">
            <Button
              title="View Map"
              // onPress={() =>
              //   navigation.navigate("Property Map", {
              //     latitude: property.lat,
              //     longitude: property.lng,
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
          </HStack> */}
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Text
              style={{
                flex: 0.36,
                marginLeft: 15,
                fontSize: 24,
                paddingTop: 10,
              }}
            >
              ${propertyZillow.price}
            </Text>
            <Text style={{ flex: 0.36 }}>
              {propertyZillow.bedrooms} Beds {propertyZillow.bathrooms} Baths
            </Text>
          </HStack>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Text
              style={{
                flex: 1,
                marginLeft: 15,
                fontSize: 20,
              }}
            >
              Zestimate
            </Text>
            <Text style={{ flex: 0.36 }}>${propertyZillow.zestimate}</Text>
          </HStack>

          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                flex: 1,
                marginLeft: 15,
                fontSize: 20,
              }}
            >
              Features
            </Text>
          </HStack>
          {handleFeatures()}
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
              {propertyZillow.description}
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
              {/* Contact Agent - {propertyZillow.contact_recipients?[0]} {property.user.lname} */}
            </Text>
          </HStack>
          {/* <HStack alignItems="center" space={1} justifyContent="space-between">
            <AspectRatio w="100%" ratio={16 / 14}>
              <Image
                style={{ paddingTop: "25px", marginTop: "25px" }}
                source={{
                  uri: `${GLOBALS.TEMP_IMAGE_PATH}${property.user.picture}`,
                }}
                alt="image"
              />
            </AspectRatio>
          </HStack> */}
          {/* <HStack alignItems="center" space={1} justifyContent="space-between">
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
        {/* <ImageGallery close={closeGallery} isOpen={isOpen} images={imageURLs} /> */}
      </ScrollView>
    </Box>
  );
}

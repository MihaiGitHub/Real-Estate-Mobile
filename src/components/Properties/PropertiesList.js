import React, { useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { propertiesFetch } from "../../actions/PropertiesActions";
import {
  Box,
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
import { Spinner } from "../Common/Spinner";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "./ImageCarousel";

export function PropertiesList() {
  const { listFiltered, propertiesZillow } = useSelector(
    (state) => state.properties
  );

  const dispatch = useDispatch();
  // const navigation = useNavigation();

  useEffect(() => {
    dispatch(propertiesFetch());
  }, []);

  if (listFiltered.length === 0 && propertiesZillow.length === 0) {
    return <Spinner size="large" />;
  }

  const renderProperties = () => {
    if (Array.isArray(listFiltered) && listFiltered.length > 0) {
      return listFiltered.map((item, index, array) => {
        // if (item.properties_images.length > 0) {
        //   const images = item.properties_images.map((image) => {
        //     return { id: item.id, url: image.url, title: item.title };
        //   });

        //   array[index]["images"] = images;
        // } else {
        //   array[index]["images"] = [
        //     {
        //       url: `https://ssl.cdn-redfin.com/photo/115/bigphoto/382/22304382_0.jpg`,
        //       title: item.title,
        //     },
        //   ];
        // }

        return (
          <Box
            border="1"
            borderRadius="md"
            key={index}
            style={{ borderBottom: 100 }}
          >
            <VStack space="0">
              <Box>
                {/* <ImageCarousel
                  data={array[index]["images"]}
                  openGallery={false}
                /> */}
              </Box>
              <HStack
                alignItems="center"
                space={0}
                justifyContent="space-between"
              >
                <Text
                  style={{
                    flex: 0.36,
                    marginLeft: 15,
                    fontSize: 24,
                    paddingTop: 10,
                  }}
                >
                  ${item.price}
                </Text>
                <Text style={{ flex: 0.36 }}>
                  {item.bedrooms} Beds 2 {item.baths} Baths
                </Text>
              </HStack>
              <Box px="4" pb="1" pt={0}>
                {item.address}
              </Box>
            </VStack>
          </Box>
        );
      });
    } else {
      ToastAndroid.show(
        "No properties found near this location!",
        ToastAndroid.LONG
      );
    }
  };

  const renderZillowProperties = () => {
    return <Text>Zillow Properties full</Text>;
  };

  console.log("listFiltered ", listFiltered, "Zillow ", propertiesZillow);

  return (
    <ScrollView>
      <Box style={{ marginBottom: 70 }}>
        {listFiltered && listFiltered.length > 0 && renderProperties()}
        {propertiesZillow &&
          propertiesZillow.length > 0 &&
          renderZillowProperties()}
      </Box>
    </ScrollView>
  );
}

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
// import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "./ImageCarousel";
import "intl";
import "intl/locale-data/jsonp/en"; // or any other locale you need

export function PropertiesList() {
  const { listFiltered, propertiesUSRealEstate } = useSelector(
    (state) => state.properties
  );

  const dispatch = useDispatch();
  // const navigation = useNavigation();
  console.log("loggingMessage");
  //logMessage("dispatching propertiesFetch");

  useEffect(() => {
    dispatch(propertiesFetch());
  }, []);

  if (listFiltered.length === 0 && propertiesUSRealEstate.length === 0) {
    return <Spinner size="large" />;
  }

  const dollarUSLocale = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const renderProperties = () => {
    if (Array.isArray(listFiltered) && listFiltered.length > 0) {
      return listFiltered.map((item, index, array) => {
        console.log("item ", item);
        if (item.properties_images.length > 0) {
          const images = item.properties_images.map((image) => {
            return {
              id: item.id,
              url: image.url,
              title: item.title,
            };
          });

          array[index]["images"] = images;
        } else {
          array[index]["images"] = [
            {
              id: item.id,
              url: `https://ssl.cdn-redfin.com/photo/115/bigphoto/382/22304382_0.jpg`,
              title: item.title,
            },
          ];
        }

        return (
          <Box
            border="1"
            borderRadius="md"
            key={index}
            style={{ borderBottom: 100 }}
          >
            <VStack space="0">
              <Box>
                <ImageCarousel
                  data={array[index]["images"]}
                  openGallery={false}
                  type="DB"
                />
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
                  {dollarUSLocale.format(item.price)}
                </Text>
                <Text style={{ flex: 0.36 }}>
                  {item.bedrooms} Beds / {item.bathrooms} Baths
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

  const renderUSRealEstateProperties = () => {
    if (
      Array.isArray(propertiesUSRealEstate) &&
      propertiesUSRealEstate.length > 0
    ) {
      return propertiesUSRealEstate.map((item, index, array) => {
        //  console.log("item777 ", item);

        if (item.photos && item.photos.length > 0) {
          const images = item.photos.map((image) => {
            return {
              id: item.property_id,
              url: image.href,
              title: item.branding[0]?.name,
            };
          });

          array[index]["images"] = images;
        } else {
          array[index]["images"] = [
            {
              id: item.property_id,
              url: `https://ssl.cdn-redfin.com/photo/115/bigphoto/382/22304382_0.jpg`,
              title: item.branding[0]?.name,
            },
          ];
        }
        console.log("IMAGES ", array[index]["images"]);
        return (
          <Box
            border="1"
            borderRadius="md"
            key={index}
            style={{ borderBottom: 100 }}
          >
            <VStack space="0">
              <Box>
                <ImageCarousel
                  data={array[index]["images"]}
                  openGallery={false}
                  type="USRealEstate"
                />
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
                  {dollarUSLocale.format(item.list_price)}
                </Text>
                <Text style={{ flex: 0.36 }}>
                  {item.description?.beds} Beds / {item.description?.baths}{" "}
                  Baths
                </Text>
              </HStack>
              <Box px="4" pb="1" pt={0}>
                {item.location?.address?.line}
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

  // console.log(
  //   "listFiltered ",
  //   listFiltered,
  //   "USRealEstate ",
  //   propertiesUSRealEstate
  // );

  return (
    <ScrollView>
      <Box style={{ marginBottom: 70 }}>
        {listFiltered && listFiltered.length > 0 && renderProperties()}
        {propertiesUSRealEstate &&
          propertiesUSRealEstate.length > 0 &&
          renderUSRealEstateProperties()}
      </Box>
    </ScrollView>
  );
}

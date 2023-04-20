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
// import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

export function PropertiesList() {
  const properties = useSelector((state) => state.properties.listFiltered);
  //let properties = [];

  const dispatch = useDispatch();
  // const navigation = useNavigation();

  useEffect(() => {
    dispatch(propertiesFetch());
  }, []);

  if (properties.length === 0) {
    return <Spinner size="large" />;
  }
  console.log("properties ", properties);
  const renderProperties = () => {
    if (Array.isArray(properties) && properties.length > 0) {
      //  console.log("properties ", properties);

      return properties.map((item, index, array) => {
        console.log("item ", item);

        // if (item.PropertyImages.length > 0) {
        //   const images = item.PropertyImages.map((image) => {
        //     return image.url;
        //   });

        //   array[index]["images"] = images;
        // } else {
        //   array[index]["images"] = [
        //     `https://media0.giphy.com/media/l2JejWb7Yq2L7TOVi/giphy.gif?cid=790b76111476f50608a579e2e3c159c0553040a43dcfcc64&rid=giphy.gif&ct=g`,
        //   ];
        // }

        return (
          <Box border="1" borderRadius="md" key={index}>
            <VStack space="4">
              <Box>
                {/* <SliderBox
                  images={array[index]["images"]}
                  sliderBoxHeight={200}
                  onCurrentImagePressed={(index) => {
                    navigation.navigate("Property Info", {
                      id: item.id,
                    });
                  }}
                  dotColor="#FFEE58"
                  inactiveDotColor="#90A4AE"
                /> */}
              </Box>
              <HStack
                alignItems="center"
                space={4}
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
              <Box px="4" pb="4" pt={0}>
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

  return <ScrollView>{renderProperties()}</ScrollView>;
}

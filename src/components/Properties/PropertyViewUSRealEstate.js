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
  Divider,
  Icon,
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
import { Spinner } from "../Common/Spinner";
import Svg, { G, Circle } from "react-native-svg";

import {
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryLabel,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryScatter,
  //  VictoryToolTip,
  VictoryTooltip,
  VictoryAxis,
  VictoryZoomContainer,
} from "victory-native";

import GLOBALS from "../Common/Globals";
import "intl";
import "intl/locale-data/jsonp/en"; // or any other locale you need

export function PropertyViewUSRealEstate({ route }) {
  const [pid, setPid] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //const { propertyUSRealEstate } = useSelector((state) => state.properties);
  const propertyData = useSelector(
    (state) => state.properties.propertyUSRealEstate
  );

  const size = 400;

  const { id } = route.params;

  useEffect(() => {
    dispatch(propertyUSRealEstateFetch(id));
  }, []);

  useEffect(() => {
    console.log("property data changed to ", propertyData);
    setTimeout(() => {
      setPid(id);
    }, 3000);
  }, [propertyData]);

  // console.log("propertyUSRealEstate ", propertyData);

  console.log("Object entries777 ", Object.entries(propertyData).length);

  // if (Object.entries(propertyUSRealEstate).length === 0) {
  //   return <Spinner size="large" />;
  // }
  console.log(pid, id);
  if (pid === 0 || id !== pid) {
    return <Spinner size="large" />;
  }

  const dollarUSLocale = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  console.log("propertyUSRealEstate ", propertyData);

  let imageURLs = [];

  if (propertyData?.photos) {
    imageURLs = propertyData.photos.map((image, index) => {
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

  let mapLatitude = undefined;
  let mapLongitude = undefined;

  if (propertyData?.location?.address?.coordinate?.lat) {
    mapLatitude = parseFloat(propertyData.location.address.coordinate.lat, 10);
  }

  if (propertyData?.location?.address?.coordinate?.lon) {
    mapLongitude = parseFloat(propertyData.location.address.coordinate.lon, 10);
  }

  const initiateUber = () => {
    if (mapLatitude && mapLongitude) {
      let url = `uber://?action=setPickup&dropoff[latitude]=${mapLatitude}&dropoff[longitude]=${mapLongitude}`;

      Linking.openURL(url)
        .then((data) => {
          console.log("Uber Opened");
        })
        .catch(() => {
          alert("Make sure Uber is installed on your device");
        });
    } else {
      return false;
    }
  };

  const handleGetDirections = () => {
    if (mapLatitude && mapLongitude) {
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
    } else {
      return false;
    }
  };

  let data = [];
  if (propertyData?.estimates?.historical_values[0]?.estimates) {
    data = propertyData?.estimates?.historical_values[0]?.estimates?.map(
      (item, index) => {
        return { x: item.date, y: item.estimate };
      }
    );
  }

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
              {dollarUSLocale.format(propertyData?.list_price)}
            </Text>
            <Text
              style={{
                marginRight: 10,
              }}
            >
              {propertyData?.description?.beds} Beds /{" "}
              {propertyData?.description?.baths} Baths
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
              {propertyData?.location?.address.line}
            </Text>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            {mapLatitude && mapLongitude && (
              <Button
                variant="outline"
                title="View Map"
                onPress={() =>
                  navigation.navigate("Property Map", {
                    latitude: mapLatitude,
                    longitude: mapLongitude,
                  })
                }
                style={{ flex: 1, marginLeft: 10 }}
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
            )}
            <Button
              variant="outline"
              title="Get Directions"
              onPress={() => handleGetDirections()}
              style={{ flex: 1 }}
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
              style={{ flex: 1, marginRight: 10 }}
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
            <Text>Zestimate</Text>
            <Text>
              {dollarUSLocale.format(
                propertyData?.estimates?.forecast_values[0]?.estimates[0]
                  ?.estimate
              )}
            </Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            mt="-3"
            p="0"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Text>Price/Sq.Ft.</Text>
            <Text>{dollarUSLocale.format(propertyData?.price_per_sqft)}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            mt="-3"
            p="0"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Text>Style</Text>
            <Text>{propertyData?.source?.raw?.style}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            mt="-3"
            p="0"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Text>Lot Sq.Ft.</Text>
            <Text>{propertyData?.description?.lot_sqft}</Text>
          </HStack>

          <HStack
            justifyContent="space-between"
            mt="-3"
            p="0"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Text>Year built</Text>
            <Text>{propertyData?.description?.year_built}</Text>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
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
                marginRight: 5,
              }}
            >
              {propertyData?.description?.text}
            </Text>
          </HStack>
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
              }}
            >
              Price History
            </Text>
          </HStack>
          <HStack
            mt="-10"
            p="0"
            alignItems="center"
            space={1}
            justifyContent="space-between"
          >
            <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryAxis fixLabelOverlap />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(t) => {
                    if (t.toString().length > 5) {
                      return `${t.toString().slice(0, -3)}k`;
                    }

                    return t;
                  }}
                />
                <VictoryLine
                  style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" },
                  }}
                  data={data.reverse()}
                />
              </VictoryChart>
            </Svg>
          </HStack>

          <HStack
            mt="-10"
            p="0"
            alignItems="center"
            space={1}
            justifyContent="space-between"
          >
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
              }}
            >
              Contact Agent - {propertyData?.advertisers[0]?.name}
            </Text>
          </HStack>
          {propertyData?.advertisers[0]?.photo?.href && (
            <HStack
              alignItems="center"
              space={1}
              justifyContent="space-between"
            >
              <AspectRatio w="100%" ratio={16 / 14}>
                <Image
                  style={{ paddingTop: "25px", marginTop: "25px" }}
                  source={{
                    uri: `${propertyData?.advertisers[0]?.photo?.href}`,
                  }}
                  alt="image"
                />
              </AspectRatio>
            </HStack>
          )}
          <HStack alignItems="center" space={1} justifyContent="space-between">
            <Button
              title="Send Agent Message"
              onPress={() => navigation.navigate("Property Send Message")}
              style={{
                flex: 1,
                marginLeft: 15,
                marginRight: 15,
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

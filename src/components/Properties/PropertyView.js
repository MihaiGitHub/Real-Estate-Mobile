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

export function PropertyView({ route }) {
  const [propertyDB, setPropertyDB] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log("route ", route);

  const { id } = route.params;

  const { list, propertiesUSRealEstate, propertyUSRealEstate } = useSelector(
    (state) => state.properties
  );

  console.log("PROPERTIES ", list, propertiesUSRealEstate);

  useEffect(() => {
    if (list.length > 0) {
      const property = list.find((x) => x.id === id);
      setPropertyDB(property);
    } else {
      dispatch(propertyUSRealEstateFetch(id));
    }
  }, []);

  // const property =
  //   list.length > 0
  //     ? list.find((x) => x.id === id)
  //     : propertiesUSRealEstate.find((x) => x.property_id === id);

  console.log("propertyDB ", propertyDB);
  console.log("propertyUSRealEstate ", propertyUSRealEstate);

  return false;
}

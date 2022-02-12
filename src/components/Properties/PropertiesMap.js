import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { findPropertyById } from "../../actions/PropertiesActions";

export function PropertiesMap({ navigation }) {
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPropertyById());
  }, []);

  console.log("Redux store ", reduxStore);
  return (
    <View>
      <Text>Properties Map</Text>
    </View>
  );
}

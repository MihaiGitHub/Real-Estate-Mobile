import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { findPropertyById } from "../../actions/PropertiesActions";

export function PropertyView({ navigation }) {
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPropertyById());
  }, []);

  console.log("Redux store ", reduxStore);
  return (
    <View>
      <Button
        title="Go to Properties List"
        onPress={() => navigation.navigate("PropertiesList")}
      />
    </View>
  );
}

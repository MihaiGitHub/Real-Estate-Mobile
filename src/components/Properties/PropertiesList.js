import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { propertiesFetch } from "../../actions/PropertiesActions";

export function PropertiesList({ navigation }) {
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(propertiesFetch());
  }, []);

  // console.log("Redux store  ", reduxStore);

  return (
    <View>
      <Button
        title="Go to properties View"
        onPress={() => navigation.navigate("PropertyView")}
      />
    </View>
  );
}

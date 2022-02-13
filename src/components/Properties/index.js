import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropertyView } from "./PropertyView";
import { NavBarTabs } from "../Common/Tabs";
import { NavBarSearch } from "../Common/NavBarSearch";

const PropertiesStack = createNativeStackNavigator();

export function Properties() {
  return (
    <PropertiesStack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <PropertiesStack.Screen
        name="PropertiesMain"
        component={NavBarTabs}
        options={{ headerTitle: (props) => <NavBarSearch {...props} /> }}
      />
      <PropertiesStack.Screen
        name="Property Detail"
        title="Property"
        component={PropertyView}
        //  options={{ headerShown: false }}
      />
    </PropertiesStack.Navigator>
  );
}

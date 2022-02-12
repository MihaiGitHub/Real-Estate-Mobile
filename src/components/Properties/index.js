import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropertyView } from "./PropertyView";
import { NavBarTabs } from "../Common/Tabs";

const PropertiesStack = createNativeStackNavigator();

export function Properties() {
  return (
    <PropertiesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PropertiesStack.Screen name="PropertiesMain" component={NavBarTabs} />
      <PropertiesStack.Screen name="PropertyView" component={PropertyView} />
    </PropertiesStack.Navigator>
  );
}

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropertiesList } from "./PropertiesList";
import { PropertyView } from "./PropertyView";

const PropertiesStack = createNativeStackNavigator();

export function Properties() {
  return (
    <PropertiesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PropertiesStack.Screen
        name="PropertiesList"
        component={PropertiesList}
      />
      <PropertiesStack.Screen name="PropertyView" component={PropertyView} />
    </PropertiesStack.Navigator>
  );
}

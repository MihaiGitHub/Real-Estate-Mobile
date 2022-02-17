import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropertyView } from "./PropertyView";
import { PropertyMap } from "./PropertyMap";
import { NavBarTabs } from "../Common/Tabs";
import { NavBarSearch } from "../Common/NavBarSearch";

const PropertiesStack = createNativeStackNavigator();

export function Properties() {
  return (
    <PropertiesStack.Navigator>
      <PropertiesStack.Screen
        name="PropertiesMain"
        component={NavBarTabs}
        options={{ headerTitle: (props) => <NavBarSearch {...props} /> }}
      />
      <PropertiesStack.Screen
        name="Property Map"
        title="Property Map"
        component={PropertyMap}
      />
      <PropertiesStack.Screen
        name="Property Info"
        title="Property"
        component={PropertyView}
      />
    </PropertiesStack.Navigator>
  );
}

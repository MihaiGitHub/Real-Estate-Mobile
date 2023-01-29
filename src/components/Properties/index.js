import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropertyView } from "./PropertyView";
import { PropertiesMap } from "./PropertiesMap";
import { NavBarTabs } from "../Common/Tabs";
import { NavBarSearch } from "../Common/NavBarSearch";
import { PropertySendMessage } from "./PropertySendMessage";
import { PropertySearch } from "./PropertySearch";

const PropertiesStack = createNativeStackNavigator();

export function Properties() {
  return (
    <PropertiesStack.Navigator>
      <PropertiesStack.Screen
        name="Properties Main"
        component={NavBarTabs}
        options={{ headerShown: false }}
        //   options={{ headerTitle: (props) => <NavBarTabs {...props} /> }}
      />
      <PropertiesStack.Screen
        name="Properties Map"
        title="Properties Map"
        component={PropertiesMap}
      />
      {/* <PropertiesStack.Screen
        name="Property Info"
        title="Property"
        component={PropertyView}
      />
      <PropertiesStack.Screen
        name="Property Send Message"
        title="Message Agent"
        component={PropertySendMessage}
      />
      <PropertiesStack.Screen
        name="Property Search"
        title="Property Search"
        component={PropertySearch}
      /> */}
    </PropertiesStack.Navigator>
  );
}

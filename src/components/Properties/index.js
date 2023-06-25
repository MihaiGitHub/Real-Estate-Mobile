import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Globals from "../Common/Globals";
import { PropertyView } from "./PropertyView";
import { PropertiesMap } from "./PropertiesMap";
import { PropertyMap } from "./PropertyMap";
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
        options={{
          headerTitle: (props) => <NavBarSearch {...props} type="properties" />,
          headerStyle: {
            backgroundColor: Globals.HEADER_COLOR,
          },
          headerTintColor: Globals.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: Globals.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
      <PropertiesStack.Screen
        name="Properties Map"
        title="Properties Map"
        component={PropertiesMap}
        options={{
          headerStyle: {
            backgroundColor: Globals.HEADER_COLOR,
          },
          headerTintColor: Globals.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: Globals.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
      <PropertiesStack.Screen
        name="Property Map"
        title="Property Map"
        component={PropertyMap}
        options={{
          headerStyle: {
            backgroundColor: Globals.HEADER_COLOR,
          },
          headerTintColor: Globals.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: Globals.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
      <PropertiesStack.Screen
        name="Property Info"
        title="Property"
        component={PropertyView}
        options={{
          headerStyle: {
            backgroundColor: Globals.HEADER_COLOR,
          },
          headerTintColor: Globals.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: Globals.HEADER_TITLE_FONTWEIGHT,
          },
        }}
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
        options={{
          headerStyle: {
            backgroundColor: Globals.HEADER_COLOR,
          },
          headerTintColor: Globals.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: Globals.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
    </PropertiesStack.Navigator>
  );
}

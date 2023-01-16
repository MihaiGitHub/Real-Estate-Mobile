import React from "react";
import { Text } from "react-native";

export function Properties() {
  return <Text>Properties</Text>;
}

// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { PropertyView } from "./PropertyView";
// import { PropertyMap } from "./PropertyMap";
// import { NavBarTabs } from "../Common/Tabs";
// import { NavBarSearch } from "../Common/NavBarSearch";
// import { PropertySendMessage } from "./PropertySendMessage";
// import { PropertySearch } from "./PropertySearch";

// const PropertiesStack = createNativeStackNavigator();

// export function Properties() {
//   return (
//     <PropertiesStack.Navigator>
//       <PropertiesStack.Screen
//         name="PropertiesMain"
//         component={NavBarTabs}
//         options={{ headerTitle: (props) => <NavBarSearch {...props} /> }}
//       />
//       <PropertiesStack.Screen
//         name="Property Map"
//         title="Property Map"
//         component={PropertyMap}
//       />
//       <PropertiesStack.Screen
//         name="Property Info"
//         title="Property"
//         component={PropertyView}
//       />
//       <PropertiesStack.Screen
//         name="Property Send Message"
//         title="Message Agent"
//         component={PropertySendMessage}
//       />
//       <PropertiesStack.Screen
//         name="Property Search"
//         title="Property Search"
//         component={PropertySearch}
//       />
//     </PropertiesStack.Navigator>
//   );
// }

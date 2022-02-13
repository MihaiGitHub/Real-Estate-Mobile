import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Properties } from "./src/components/Properties";
import { Agents } from "./src/components/Agents";
import { Account } from "./src/components/Account";
import { NavBarSearch } from "./src/components/Common/NavBarSearch";

// Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

const Tab = createBottomTabNavigator();

function MainMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Properties") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Agents") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "Account") {
            iconName = focused ? "list" : "list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Properties"
        component={Properties}
        options={{ headerShown: false }}
        // options={{ headerTitle: (props) => <NavBarSearch {...props} /> }}
      />
      <Tab.Screen
        name="Agents"
        component={Agents}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

// extend the theme
//export const theme = extendTheme({ config });

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <MainMenu />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

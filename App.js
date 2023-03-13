import { Provider, useSelector, useDispatch } from "react-redux";
//import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

//import thunk from "redux-thunk";
//import reducers from "./src/reducers";
import PropertiesReducer from "./src/reducers/PropertiesReducer";
import AgentsReducer from "./src/reducers/AgentsReducer";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Properties } from "./src/components/Properties";
import { Agents } from "./src/components/Agents";
import { Profile } from "./src/components/Profile";
import { NativeBaseProvider } from "native-base";
import { NavBarSearch } from "./src/components/Common/NavBarSearch";

const Tab = createBottomTabNavigator();

function MainMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 50,
          paddingHorizontal: 5,
          paddingTop: 0,
          //  backgroundColor: "rgba(34,36,40,1)",
          backgroundColor: "#344955",
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PROPERTIES") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "AGENTS") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "PROFILE") {
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
        name="PROPERTIES"
        component={Properties}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AGENTS"
        component={Agents}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

// The redux-dev-tools and redux-thunk are already included in redux-toolkit.
const store = (preloadedState) =>
  configureStore({
    reducer: {
      properties: PropertiesReducer,
      agents: AgentsReducer,
    },
    preloadedState,
  });
// const store = configureStore({
//   reducer: reducers,
// });

export default function App() {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <NativeBaseProvider>
          <MainMenu />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}

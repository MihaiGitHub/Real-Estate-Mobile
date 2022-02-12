import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { PropertiesList } from "../Properties/PropertiesList";
import { PropertiesMap } from "../Properties/PropertiesMap";

const FirstRoute = () => <PropertiesList />;

const SecondRoute = () => <PropertiesMap />;

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export function NavBarTabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      //   style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

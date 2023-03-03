import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { PropertiesList } from "../Properties/PropertiesList";
import { PropertiesMap } from "../Properties/PropertiesMap";

const FirstRoute = () => <PropertiesList />;

const SecondRoute = () => <PropertiesMap />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export function NavBarTabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "List" },
    { key: "second", title: "Map" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

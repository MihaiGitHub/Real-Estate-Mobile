import React, { Component } from "react";
import { Tab, Tabs, TabHeading, Text } from "native-base";
import PropertyList from "./PropertyList";
import PropertyMapSearch from "./PropertyMapSearch";

class PropertiesMain extends Component {
  render() {
    return (
      <Tabs
        locked={true}
        style={Platform.OS === "android" ? { overflow: "hidden" } : null}
      >
        <Tab
          heading={
            <TabHeading>
              <Text>List</Text>
            </TabHeading>
          }
        >
          <PropertyList />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>Map</Text>
            </TabHeading>
          }
        >
          <PropertyMapSearch />
        </Tab>
      </Tabs>
    );
  }
}

export default PropertiesMain;

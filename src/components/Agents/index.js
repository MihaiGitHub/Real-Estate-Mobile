import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AgentsList } from "./AgentsList";
import { AgentView } from "./AgentView";
import { AgentSearch } from "./AgentSearch";
import { NavBarSearch } from "../Common/NavBarSearch";

const AgentsStack = createNativeStackNavigator();

export function Agents() {
  return (
    <AgentsStack.Navigator>
      <AgentsStack.Screen
        name="Agent List"
        component={AgentsList}
        options={{
          headerTitle: (props) => <NavBarSearch {...props} type="agents" />,
        }}
      />
      <AgentsStack.Screen name="Agent Info" component={AgentView} />
      <AgentsStack.Screen
        name="Agent Search"
        title="Agent Search"
        component={AgentSearch}
      />
    </AgentsStack.Navigator>
  );
}

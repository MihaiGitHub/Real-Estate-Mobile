import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AgentsList } from "./AgentsList";
import { AgentView } from "./AgentView";

const AgentsStack = createNativeStackNavigator();

export function Agents() {
  return (
    <AgentsStack.Navigator>
      <AgentsStack.Screen name="Agent List" component={AgentsList} />
      <AgentsStack.Screen name="Agent Info" component={AgentView} />
    </AgentsStack.Navigator>
  );
}

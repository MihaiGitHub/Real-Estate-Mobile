import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AgentsList } from "./AgentsList";
import { AgentView } from "./AgentView";

const AgentsStack = createNativeStackNavigator();

export function Agents() {
  return (
    <AgentsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AgentsStack.Screen name="AgentsList" component={AgentsList} />
      <AgentsStack.Screen name="AgentView" component={AgentView} />
    </AgentsStack.Navigator>
  );
}

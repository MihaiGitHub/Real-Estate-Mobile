import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings } from "./Settings";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsUse } from "./TermsUse";

const AccountStack = createNativeStackNavigator();

export function Account() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Settings" component={Settings} />
      <AccountStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <AccountStack.Screen name="TermsUse" component={TermsUse} />
    </AccountStack.Navigator>
  );
}

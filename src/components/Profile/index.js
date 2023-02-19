import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentCalculator } from "./PaymentCalculator";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsUse } from "./TermsUse";
import { About } from "./About";
import { Main } from "./Main";

const AccountStack = createNativeStackNavigator();

export function Profile() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Main" component={Main} />
      <AccountStack.Screen
        name="PaymentCalculator"
        component={PaymentCalculator}
      />
      <AccountStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <AccountStack.Screen name="TermsUse" component={TermsUse} />
      <AccountStack.Screen name="About" component={About} />
    </AccountStack.Navigator>
  );
}

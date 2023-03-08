import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentCalculator } from "./PaymentCalculator";
import { AffordabilityCalculator } from "./AffordabilityCalculator";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsUse } from "./TermsUse";
import { About } from "./About";
import { Main } from "./Main";

const AccountStack = createNativeStackNavigator();

export function Profile() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Profile" component={Main} />
      <AccountStack.Screen
        name="PaymentCalculator"
        component={PaymentCalculator}
      />
      <AccountStack.Screen
        name="AffordabilityCalculator"
        component={AffordabilityCalculator}
      />
      <AccountStack.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <AccountStack.Screen name="Terms of Use" component={TermsUse} />
      <AccountStack.Screen name="About" component={About} />
    </AccountStack.Navigator>
  );
}

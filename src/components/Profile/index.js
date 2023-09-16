import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GLOBALS from "../Common/Globals";
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
      <AccountStack.Screen
        name="Main"
        component={Main}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: GLOBALS.HEADER_COLOR,
          },
          headerTintColor: GLOBALS.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: GLOBALS.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
      <AccountStack.Screen
        name="Payment Calculator"
        component={PaymentCalculator}
        options={{
          headerStyle: {
            backgroundColor: GLOBALS.HEADER_COLOR,
          },
          headerTintColor: GLOBALS.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: GLOBALS.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
      <AccountStack.Screen
        name="Affordability Calculator"
        component={AffordabilityCalculator}
        options={{
          headerStyle: {
            backgroundColor: GLOBALS.HEADER_COLOR,
          },
          headerTintColor: GLOBALS.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: GLOBALS.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
      <AccountStack.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{
          headerStyle: {
            backgroundColor: GLOBALS.HEADER_COLOR,
          },
          headerTintColor: GLOBALS.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: GLOBALS.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
      <AccountStack.Screen
        name="Terms of Use"
        component={TermsUse}
        options={{
          headerStyle: {
            backgroundColor: GLOBALS.HEADER_COLOR,
          },
          headerTintColor: GLOBALS.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: GLOBALS.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
      <AccountStack.Screen
        name="About"
        component={About}
        options={{
          headerStyle: {
            backgroundColor: GLOBALS.HEADER_COLOR,
          },
          headerTintColor: GLOBALS.HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: GLOBALS.HEADER_TITLE_FONTWEIGHT,
          },
        }}
      />
    </AccountStack.Navigator>
  );
}

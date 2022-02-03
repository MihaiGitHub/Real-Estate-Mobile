import React from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
} from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings } from "./Settings";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsUse } from "./TermsUse";
import { Main } from "./Main";

const AccountStack = createNativeStackNavigator();

export function Account() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Main" component={Main} />
      <AccountStack.Screen name="Settings" component={Settings} />
      <AccountStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <AccountStack.Screen name="TermsUse" component={TermsUse} />
    </AccountStack.Navigator>
  );
}

import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={SignIn}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthRoutes;
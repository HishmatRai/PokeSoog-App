import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  SignIn,
  SignUp,
  SelectCategory,
  Pokemon
} from "./../Screens/index";
function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> */}
           {/* <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        /> */}
            {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        /> */}
           {/* <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{ headerShown: false }}
        /> */}
             <Stack.Screen
          name="Pokemon"
          component={Pokemon}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

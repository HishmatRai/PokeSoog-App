import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  SignIn,
  SignUp,
  SelectCategory,
  Pokemon,
  Packs,
  PokemanSword,
  Checkout,
  CreditCard,
  OrderConfirmed,
  PokemonForMember,
  OrderSummary,
  MyCart
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
        {/* <Stack.Screen
          name="Pokemon"
          component={Pokemon}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Packs"
          component={Packs}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="PokemanSword"
          component={PokemanSword}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ headerShown: false }}
        /> */}
          {/* <Stack.Screen
          name="CreditCard"
          component={CreditCard}
          options={{ headerShown: false }}
        /> */}
         {/* <Stack.Screen
          name="OrderConfirmed"
          component={OrderConfirmed}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="PokemonForMember"
          component={PokemonForMember}
          options={{ headerShown: false }}
        /> */}
         {/* <Stack.Screen
          name="OrderSummary"
          component={OrderSummary}
          options={{ headerShown: false }}
        /> */}
           <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

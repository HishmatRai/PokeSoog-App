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
  MyCart,
  Membership,
  AddProduct,
  ConfirmBid,
  ReviewBid,
  PlaceBid,
  SellCards,
  Auction,
  DragonBall,
  SubscriptionDoneSuccessfully,
} from "./../Screens/index";
function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pokemon"
          component={Pokemon}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Packs"
          component={Packs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PokemanSword"
          component={PokemanSword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreditCard"
          component={CreditCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderConfirmed"
          component={OrderConfirmed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PokemonForMember"
          component={PokemonForMember}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderSummary"
          component={OrderSummary}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Membership"
          component={Membership}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmBid"
          component={ConfirmBid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReviewBid"
          component={ReviewBid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlaceBid"
          component={PlaceBid}
          options={{ headerShown: false }}
          xd
        />
        <Stack.Screen
          name="SellCards"
          component={SellCards}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DragonBall"
          component={DragonBall}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auction"
          component={Auction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SubscriptionDoneSuccessfully"
          component={SubscriptionDoneSuccessfully}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

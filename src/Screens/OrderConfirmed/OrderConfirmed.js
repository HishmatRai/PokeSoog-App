import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  Text,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const OrderConfirmed = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  return (
    <View style={styles.container}>
      {/* <<<<<<<< StatusBar >>>>>>>>> */}
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor="#013D6F"
        translucent={true}
      />
      <ImageBackground
        source={require("./../../img/backgroundImg.png")}
        style={styles._image}
      >
        <ScrollView>
          <View style={{ margin: 20 }}>
            <Image
              source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
              style={styles.card_img}
            />
            <Text style={styles._heading}>
              Pokemon sowrd and sheild battle styles booster packs
            </Text>
            <Text style={styles._message}>
              Order Confirmed! Thanks for choosing Us!
            </Text>
            {/* bbutton */}
            <TouchableOpacity
              style={styles._pay_button}
              onPress={() => props.navigation.navigate("SelectCategory")}
            >
              <Text style={styles._pay_button_text}>Back to home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#014F92",
  },
  _image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
  },
  card_img: {
    width: 130,
    height: 130,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 50,
  },
  _heading: {
    color: "white",
    fontSize: 19,
    textAlign: "center",
    width: "50%",
    alignSelf: "center",
    marginTop: 30,
  },
  _message: {
    color: "white",
    fontSize: 19,
    textAlign: "center",
    width: "50%",
    alignSelf: "center",
    marginTop: 30,
  },
  _pay_button: {
    backgroundColor: "#F7931E",
    borderRadius: 5,
    paddingBottom: 8,
    paddingTop: 5,
    marginTop: 50,
  },
  _pay_button_text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
export default OrderConfirmed;

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const CreditCard = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [text, setText] = React.useState("");
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [code, setCode] = React.useState("");
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
          <View>
            <View style={{ margin: 20 }}>
              {/* Header */}
              <View style={styles._header_main}>
                <View style={styles._header_column}>
                  <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons
                      name="chevron-back-outline"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                  <Text style={styles._header_heading}>Checkout</Text>
                </View>
                <View style={styles._header_column}>
                  <TouchableOpacity>
                    <Ionicons
                      name="ios-notifications"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginRight: 5 }}>
                    <Entypo name="shopping-cart" size={24} color="#F7931E" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles._cart_show_main}>
                <Text style={styles._cart_show}>1</Text>
              </View>

              {/* input */}
              <View style={styles._input_main}>
                <Text style={styles._input_heading}>Card Number</Text>
                <TextInput
                  value={text}
                  onChangeText={(text) => setText(text)}
                  style={styles._input}
                  underlineColor="black"
                  placeholderTextColor="black"
                  keyboardType="numeric"
                />
                <Text style={styles._input_heading}>Card Holder Name</Text>
                <TextInput
                  value={name}
                  onChangeText={(name) => setName(name)}
                  style={styles._input}
                  underlineColor="black"
                  placeholderTextColor="black"
                />

                <View style={styles._date_code_main}>
                  <View style={styles._date_input}>
                    <Text style={styles._input_heading}>Expire Date</Text>
                    <TextInput
                      value={date}
                      placeholder="MM  / YY"
                      onChangeText={(date) => setDate(date)}
                      style={styles._input}
                      underlineColor="black"
                      placeholderTextColor="black"
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles._date_input}>
                    <Text style={styles._input_heading}>Security Code</Text>
                    <TextInput
                      placeholder="CVV"
                      value={code}
                      onChangeText={(code) => setCode(code)}
                      style={styles._input}
                      underlineColor="black"
                      placeholderTextColor="black"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>

              {/* bbutton */}
              <TouchableOpacity
                style={styles._pay_button}
                onPress={() => props.navigation.navigate("OrderConfirmed")}
              >
                <Text style={styles._pay_button_text}>Pay and Proceed</Text>
              </TouchableOpacity>
            </View>
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
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  _header_heading: {
    color: "white",
    fontSize: 20,
    marginLeft: 5,
  },
  _header_column: {
    flexDirection: "row",
    alignItems: "center",
  },
  _cart_show_main: {
    backgroundColor: "#F7931E",
    width: 12,
    height: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12 / 2,
    alignSelf: "flex-end",
    marginTop: -35,
  },
  _cart_show: {
    fontSize: 7,
    color: "white",
  },
  _input_main: {
    marginTop: 50,
  },
  _input: {
    paddingTop: 5,
    paddingBottom: 5,
    color: "black",
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
  },
  _input_heading: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 20,
  },
  _date_code_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _date_input: {
    width: "40%",
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
export default CreditCard;

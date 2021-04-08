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
  TextInput
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ReviewBid = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [numberOfProduct, setNumberOfProduct] = useState(1);
  const [price, setPrice] = React.useState("");
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  const increaseProductItem = () => {
    setNumberOfProduct(numberOfProduct + 1);
  };

  const decreaseProductItem = () => {
    if (numberOfProduct >= 1) {
      setNumberOfProduct(numberOfProduct - 1);
    }
  };
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
                  <TouchableOpacity>
                    <Ionicons
                      name="chevron-back-outline"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                  <Text style={styles._header_heading}>Place bid</Text>
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
              <View style={styles._Data_main}>
                <Text style={styles._heading}>Approx. $ 1.5</Text>
                <Text style={styles._heading}>0 bid . 5d 4h left</Text>
                <Text style={{ fontSize: 24, color: "white" }}>
                We'll biid for you, up to
                </Text>
                <TextInput
                placeholder="$ 4"
                value={price}
                onChangeText={(price) => setPrice(price)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="white"
                keyboardType="numeric"
              />
              </View>
              {/* bbutton */}
              <TouchableOpacity style={styles._pay_button}>
                <Text style={styles._pay_button_text}>Review Bid</Text>
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
  _Data_main: {
    marginTop: 50,
    alignItems: "center",
  },
  _heading: {
    color: "white",
    fontSize: 17,
    marginBottom: 10,
  },
  _price: {
    color: "white",
    fontSize: 45,
    marginBottom: 10,
    marginTop: 10,
  },
  _pay_button: {
    backgroundColor: "#F7931E",
    paddingBottom: 8,
    paddingTop: 5,
    marginTop: 20,
    width: "60%",
    alignSelf: "center",
  },
  _pay_button_text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  _input: {
    paddingTop: 5,
    paddingBottom: 5,
    color: "white",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    fontSize:45,
    width:"50%",
  },
});
export default ReviewBid;

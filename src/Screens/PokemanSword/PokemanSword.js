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
import { Ionicons, Entypo } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const PokemanSword = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [numberOfProduct, setNumberOfProduct] = useState(1);
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
                  <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons
                      name="chevron-back-outline"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                  <Text style={styles._header_heading}>Pokeman sword</Text>
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

              {/*  */}
              <View style={styles.card_main}>
                <View style={styles._card_first_column}></View>
                <View style={styles._card_secont_column}>
                  <Image
                    source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
                    style={styles.card_img}
                  />
                  <Text style={styles._heading}>
                    Pokemon sowrd and sheild battle styles booster packs
                  </Text>
                  <Text style={styles._price}>$4.99</Text>
                  <View style={styles.productIncDecBtn}>
                    <TouchableOpacity
                      onPress={() => decreaseProductItem()}
                      style={styles._decrease_btn}
                    >
                      <Text style={styles.DecreaseTxt}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.totalNumberofProductTxt}>
                      {numberOfProduct}
                    </Text>
                    <TouchableOpacity
                      onPress={() => increaseProductItem()}
                      style={styles._decrease_btn}
                    >
                      <Text style={styles.IncreaseTxt}>+</Text>
                    </TouchableOpacity>
                  </View>
                  {/* bbutton */}
                  <TouchableOpacity
                    style={styles._pay_button}
                    onPress={() => props.navigation.navigate("MyCart")}
                  >
                    <Text style={styles._pay_button_text}>Add to Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles._pay_button}>
                    <Text style={styles._pay_button_text}>
                      Add to wish list{" "}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles._card_third_column}>
                  <TouchableOpacity style={styles.__interested_button}>
                    <Entypo name="heart-outlined" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
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
  productIncDecBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  _decrease_btn: {
    backgroundColor: "white",
    width: "20%",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  DecreaseTxt: {
    color: "black",
  },
  IncreaseTxt: {
    color: "black",
  },
  totalNumberofProductTxt: {
    width: "47%",
    backgroundColor: "white",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textAlign: "center",
  },
  minimumView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingBottom: 10,
    paddingTop: 10,
  },
  card_main: {
    backgroundColor: "rgba(0,146,146, 100)",
    marginTop: 50,
    flexDirection: "row",
    // alignItems: "center",
    borderRadius: 10,
    padding: 10,
    paddingBottom: 20,
    elevation: 8,
  },
  _card_first_column: {
    width: "20%",
  },
  _card_secont_column: {
    width: "60%",
  },
  _card_third_column: {
    width: "20%",
  },
  card_img: {
    width: 130,
    height: 130,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  _heading: {
    color: "white",
    fontSize: 19,
    textAlign: "center",
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
  },
  _price: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  _pay_button: {
    backgroundColor: "#F7931E",
    borderRadius: 5,
    paddingBottom: 8,
    paddingTop: 5,
    marginTop: 20,
  },
  _pay_button_text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  __interested_button: {
    backgroundColor: "#008080",
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    marginTop: 20,
  },
});
export default PokemanSword;

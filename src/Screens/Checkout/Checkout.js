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
const Checkout = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [activeBtn, setActiveBtn] = useState(0);
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  let TableData = [
    { title: "Cart Total", counter: "$4.99" },
    { title: "Tax", counter: "$0.00" },
    { title: "Delivery", counter: "$0.10" },
    { title: "Promo code discount", counter: "$0.00" },
    { title: "Sub Total", counter: "$5.00" },
  ];
  let PaymentTitle = [
    { heading: "Pay Pal", logo: require("./../../img/paypal.png") },
    { heading: "Credit Card", logo: require("./../../img/businesscard.png") },
    {
      heading: "Cash on delivery",
      logo: require("./../../img/Cashondelivery.png"),
    },
  ];
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
              {/* table data */}
              <View
                style={{ marginTop: 50, width: "90%", alignSelf: "center" }}
              >
                {TableData.map((v, i) => {
                  return (
                    <View style={styles._data_table_main}>
                      <View style={styles._data_table_column1}>
                        <Text style={styles._data_table_title}>{v.title}</Text>
                      </View>
                      <View style={styles._data_table_column2}>
                        <Text style={styles._data_table_counter}>
                          {v.counter}
                        </Text>
                      </View>
                    </View>
                  );
                })}

                {/* Select payment Method */}
                <Text style={styles._payment_heading}>
                  Select payment Method
                </Text>
                {PaymentTitle.map((v, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setActiveBtn(i)}
                      style={
                        activeBtn === i
                          ? {
                              flexDirection: "row",
                              alignItems: "center",
                              paddingBottom: 10,
                              marginBottom: 5,
                              padding: 10,
                              justifyContent: "space-between",
                              marginTop: 5,
                              borderTopWidth: 1,
                              borderTopColor: "#F1F1F1",
                            }
                          : {
                              flexDirection: "row",
                              alignItems: "center",
                              paddingBottom: 10,
                              marginBottom: 5,
                              padding: 10,
                              justifyContent: "space-between",
                              marginTop: 5,
                              borderTopWidth: 1,
                              borderTopColor: "#F1F1F1",
                            }
                      }
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image source={v.logo} style={styles._payment_logo} />
                        <Text style={styles._history_text}>{v.heading}</Text>
                      </View>
                      <View
                        style={styles._active_icon_main}
                        style={
                          activeBtn === i
                            ? {
                                backgroundColor: "#E00051",
                                width: 20,
                                height: 20,
                                borderRadius: 20,
                                borderColor: "white",
                                borderWidth: 2,
                              }
                            : {
                                backgroundColor: "white",
                                width: 20,
                                height: 20,
                                borderRadius: 20,
                                borderColor: "white",
                                borderWidth: 2,
                              }
                        }
                      ></View>
                    </TouchableOpacity>
                  );
                })}

                {/* bbutton */}
                <TouchableOpacity style={styles._pay_button}>
                  <Text style={styles._pay_button_text}>Pay and Proceed</Text>
                </TouchableOpacity>
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
  _data_table_main: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  _data_table_column1: {
    width: "80%",
  },
  _data_table_column2: {
    width: "20%",
  },
  _data_table_title: {
    color: "white",
    fontSize: 13,
  },
  _data_table_counter: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  _payment_heading: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  _history_text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
  },
  _payment_logo: {
    width: 25,
    height: 25,
  },
  _pay_button: {
    backgroundColor: "#F7931E",
    borderRadius: 5,
    paddingBottom: 8,
    paddingTop: 5,
    marginTop:20
  },
  _pay_button_text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
export default Checkout;

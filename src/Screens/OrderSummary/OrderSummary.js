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
  TextInput,
} from "react-native";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const OrderSummary = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [numberOfProduct, setNumberOfProduct] = useState(1);
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [phone, setPhone] = React.useState("");
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
              <View style={styles.__total_table_main}>
                <Text style={styles._table_Text}>Order Summary (1)</Text>
                <TouchableOpacity>
                  <Text style={{ color: "white", fontSize: 15 }}>
                    Edit Cart
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  marginTop: 10,
                  marginBottom: 30,
                }}
              >
                Pokemon sowrd and sheild battle styles booster packs
              </Text>

              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
                  style={styles.card_img}
                />
                <View>
                  <Text style={styles._Quantity}>Quantity : 1</Text>
                  <Text style={styles._Quantity}>$5.00</Text>
                </View>
              </View>
              <View style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
                <Ionicons name="checkmark-sharp" size={24} color="#FE9000" />
                <View style={styles._steps_main}>
                  <View style={styles._steps}>
                    <Text style={styles._steps_color}>1</Text>
                  </View>
                  <View style={styles._dot_main}>
                    <Text style={styles._dot_text}> ....</Text>
                  </View>
                  <View style={styles._steps}>
                    <Text style={styles._steps_color}>2</Text>
                  </View>
                  <View style={styles._dot_main}>
                    <Text style={styles._dot_text}> ....</Text>
                  </View>
                  <View style={styles._steps}>
                    <Text style={styles._steps_color}>3</Text>
                  </View>
                  <View style={styles._dot_main}>
                    <Text style={styles._dot_text}> ....</Text>
                  </View>
                  <View style={styles._steps}>
                    <Text style={styles._steps_color}>4</Text>
                  </View>
                </View>
              </View>
              <Text style={{ color: "white", fontSize: 18, marginTop: 30 }}>
                1. Shipping Details
              </Text>

              {/* input */}
              <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="black"
              />

              <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={(lastName) => setLastName(lastName)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="black"
              />

              <TextInput
                placeholder="Address"
                value={address}
                onChangeText={(address) => setAddress(address)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="black"
              />
              {/* <<<<<<<< Dropwown >>>>>>>>> */}
              <View style={{ marginTop: 10 }}>
                <DropDownPicker
                  items={[
                    // { label: '- - - -  Who you are - - - -', value: 'whoareyou', },
                    { label: "Karachi", value: "Karachi" },
                    { label: "Hyderabad", value: "Hyderabad" },
                  ]}
                  defaultIndex={0}
                  containerStyle={{ height: 40 }}
                  onChangeItem={(item) => console.log(item.label, item.value)}
                  placeholder="City"
                  itemStyle={{ justifyContent: "flex-start" }}
                  style={{ backgroundColor: "white", color: "white" }}
                  arrowColor="black"
                  labelStyle={{
                    fontSize: 14,
                    textAlign: "left",
                    color: "black",
                  }}
                  selectedLabelStyle={{
                    color: "black",
                  }}
                  dropDownStyle={{ backgroundColor: "#008080" }}
                // onChangeItem={(item) => setSelectValue(item.value)}
                />
              </View>

              <View style={{ marginTop: 10 }}>
                <DropDownPicker
                  items={[
                    // { label: '- - - -  Who you are - - - -', value: 'whoareyou', },
                    { label: "Pakistan", value: "Pakistan" },
                    { label: "India", value: "India" },
                  ]}
                  defaultIndex={0}
                  containerStyle={{ height: 40 }}
                  onChangeItem={(item) => console.log(item.label, item.value)}
                  placeholder="Countries"
                  itemStyle={{ justifyContent: "flex-start" }}
                  style={{ backgroundColor: "white", color: "black" }}
                  arrowColor="black"
                  labelStyle={{
                    fontSize: 14,
                    textAlign: "left",
                    color: "black",
                  }}
                  selectedLabelStyle={{
                    color: "black",
                  }}
                  dropDownStyle={{ backgroundColor: "#008080" }}
                // onChangeItem={(item) => setSelectValue(item.value)}
                />
              </View>
              <View style={styles._first_last_name}>
                <TextInput
                  placeholder="Zip / Postal Code"
                  value={zipCode}
                  onChangeText={(zipCode) => setZipCode(zipCode)}
                  style={styles._input2}
                  underlineColor="black"
                  placeholderTextColor="black"
                  keyboardType="numeric"
                />
                <TextInput
                  placeholder="Phone"
                  value={phone}
                  onChangeText={(phone) => setPhone(phone)}
                  style={styles._input2}
                  underlineColor="black"
                  placeholderTextColor="black"
                  keyboardType="numeric"
                />
              </View>
              {/* bbutton */}
              <TouchableOpacity style={styles._pay_button} onPress={() => props.navigation.navigate("Checkout")}>
                <Text style={styles._pay_button_text}>Continue</Text>
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
  _pay_button: {
    backgroundColor: "#F7931E",
    borderRadius: 5,
    paddingBottom: 8,
    paddingTop: 5,
    marginTop: 20,
    width: "50%",
    alignSelf: "center",
  },
  _pay_button_text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  _table_Text: {
    color: "white",
    fontSize: 20,
  },
  __total_table_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
  card_img: {
    width: 82,
    height: 82,
    borderRadius: 5,
  },
  _Quantity: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  _input: {
    paddingTop: 5,
    paddingBottom: 5,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  _first_last_name: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _input2: {
    paddingTop: 5,
    paddingBottom: 5,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: "47%",
  },
  _steps_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:10
  },
  _steps: {
    width: "10%",
    backgroundColor: "#FE9000",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  _steps_color: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold"
  },
  _dot_main: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  _dot_text: {
    color: "white",
    fontSize: 30,
    marginTop: -19
  }
});
export default OrderSummary;

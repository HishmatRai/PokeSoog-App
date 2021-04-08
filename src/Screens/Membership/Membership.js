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
import { Feather, MaterialIcons } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Membership = (props) => {
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
          <View>
            <View style={{ margin: 20 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <Feather name="menu" size={24} color="white" />
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    marginLeft: "30%",
                    fontSize: 20,
                  }}
                >
                  Membership
                </Text>
              </View>

              <Image
                source={require("./../../img/doller.png")}
                style={styles.card_img}
              />


              <View style={styles._card_level12_main}>
                <TouchableOpacity style={styles.level1_card}>
                  <MaterialIcons name="card-membership" size={20} color="#72CCD7" />
                  <Text style={styles._level_heading}>Level 1</Text>
                  <Text style={styles._level_price}>$5</Text>
                  <Text style={styles._per_month}>Per Month</Text>
                  <Text style={styles._card_counter}>5 card upload</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.level3_card}>
                  <MaterialIcons name="card-membership" size={20} color="#72CCD7" />
                  <Text style={styles._level_heading}>Level 3</Text>
                  <Text style={styles._level_price}>$20</Text>
                  <Text style={styles._per_month}>Per Month</Text>
                  <Text style={styles._card_counter}>40 card upload</Text>
                  <Text style={styles._card_counter}>Auction bid</Text>
                </TouchableOpacity>
              </View>

              <View style={styles._card_level2_main}>
                <TouchableOpacity style={styles.level2_card}>
                  <MaterialIcons name="card-membership" size={20} color="#72CCD7" />
                  <Text style={styles._level_heading}>Level 2</Text>
                  <Text style={styles._level_price2}>$10</Text>
                  <Text style={styles._per_month}>Per Month</Text>
                  <Text style={styles._card_counter}>10 card upload</Text>
                  <Text style={styles._card_counter2}>Auction bid</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles._dot_main}>
              <Text style={styles._dots_Active}></Text>
              <Text style={styles._dots}></Text>
              <Text style={styles._dots}></Text>
            </View>

            {/* bbutton */}
            <TouchableOpacity style={styles._pay_button} onPress={() => props.navigation.navigate("PokemonForMember")}>
              <Text style={styles._pay_button_text}>Subscribe</Text>
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
    width: 201,
    height: 157,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 80,
  },
  _pay_button: {
    backgroundColor: "white",
    paddingBottom: 8,
    paddingTop: 5,
    marginTop: 20,
    width: "60%",
    alignSelf: "center",
    borderRadius: 5,
    marginTop:20
  },
  _pay_button_text: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  level1_card: {
    width: "35%",
    padding: 10,
    elevation: 2,
    borderRadius: 15,
    backgroundColor: "rgba(0,146,146, 100)",
  },
  level3_card: {
    width: "35%",
    padding: 10,
    elevation: 2,
    borderRadius: 15,
    backgroundColor: "rgba(0,146,146, 100)",
  },
  _card_level12_main: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 100,

  },
  _level_heading: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    // marginBottom: 10
  },
  _level_price: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  },
  _per_month: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  _card_counter: {
    color: "white",
    textAlign: "center",
    fontSize: 11
  },
  _card_level2_main: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: -190,


  },
  level2_card: {
    width: "38%",
    padding: 10,
    elevation: 8,
    borderRadius: 15,
    backgroundColor: "rgba(0,146,146, 100)",
    alignSelf: "center",
    marginLeft: "31%",

  },
  _level_price2: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10
  },
  _card_counter2: {
    color: "white",
    textAlign: "center",
    fontSize: 11,
    marginBottom: 20,
    marginTop: 10
  },
  _dot_main: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop:20
  },
  _dots: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "white",
    marginLeft: 5
  },
  _dots_Active: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#72CCD7",
    marginLeft: 5
  }
});
export default Membership;

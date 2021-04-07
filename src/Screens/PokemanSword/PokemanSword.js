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
                  <TouchableOpacity>
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
                  <TouchableOpacity style={{marginRight:5}}>
                    <Entypo name="shopping-cart" size={24} color="#F7931E" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles._cart_show_main}>
                <Text style={styles._cart_show}>1</Text>
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
    marginTop:10
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
    marginTop:-35,
  },
  _cart_show: {
    fontSize: 7,
    color: "white",
  },
});
export default PokemanSword;

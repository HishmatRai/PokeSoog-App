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
import { Ionicons } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SubscriptionDoneSuccessfully = (props) => {
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
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles._header_heading}>Done Successfully</Text>
              </View>
              <View style={{ width: "100%" }}>
                <Image
                  source={require("./../../img/sucess.png")}
                  style={styles.select_pokemon}
                />
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
  _image2: {
    flex: 1,
    resizeMode: "cover",
    height: 400,
    width: 150,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _header_heading: {
    color: "white",
    fontSize: 20,
    marginLeft: 5,
  },
  select_pokemon: {
    width: "100%",
    height: 500,
  },
});
export default SubscriptionDoneSuccessfully;

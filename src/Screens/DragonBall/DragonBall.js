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
const DragonBall = (props) => {
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
                <Text style={styles._header_heading}>Drangon Ball</Text>
              </View>

              {/* Card  */}
              <View style={styles._Card_main}>
                <View style={styles._card}>
                  <TouchableOpacity
                    style={styles._card_column}
                    onPress={() => props.navigation.navigate("Packs")}
                  >
                    <Image
                      source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
                      style={styles._card_image}
                    />
                  </TouchableOpacity>
                  <Text style={styles._card_heading}>Packs</Text>
                </View>
                <View style={styles._card}>
                  <TouchableOpacity style={styles._card_column}>
                    <Image
                      source={require("./../../img/lf.jpg")}
                      style={styles._card_image}
                    />
                  </TouchableOpacity>
                  <Text style={styles._card_heading}>Boxes</Text>
                </View>
                <View style={styles._card}>
                  <TouchableOpacity style={styles._card_column}>
                    <Image
                      source={require("./../../img/Pokemon_Trading_Card_Game_cardback.jpg")}
                      style={styles._card_image}
                    />
                  </TouchableOpacity>
                  <Text style={styles._card_heading}>Cards</Text>
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
  _Card_main: {
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  _card_heading: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  _card: {
    width: "33%",
    padding: 5,
  },
  _card_column: {
    backgroundColor: "#7AC6C6",
    borderRadius: 5,
  },
});
export default DragonBall;

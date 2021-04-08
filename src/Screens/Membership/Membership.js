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
           
            </View>

              {/* bbutton */}
              <TouchableOpacity style={styles._pay_button}>
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
    borderRadius:5
  },
  _pay_button_text: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default Membership;

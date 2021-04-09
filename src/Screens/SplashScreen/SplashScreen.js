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
import { AntDesign } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SplashScreen = (props) => {
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
            <Image
              source={require("./../../img/splashLogo.png")}
              style={styles._logo}
            />

            {/* Buttons Main */}
            <View style={styles._buttons_main}>
              <TouchableOpacity
                style={styles._login_btn}
                onPress={() => props.navigation.navigate("SignIn")}
              >
                <Text style={styles._login_btn_text}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles._login_btn}
                onPress={() => props.navigation.navigate("SignUp")}
              >
                <Text style={styles._login_btn_text}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* Login In as a Guest */}
            <TouchableOpacity style={styles._guest_button}>
              <Text style={styles._guest_button_text}>Log In as a Guest</Text>
              <AntDesign name="arrowright" size={20} color="white" />
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
  _logo: {
    width: 194,
    height: 210,
    alignSelf: "center",
    marginTop: 100,
  },
  _buttons_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
  },
  _login_btn: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    width: "45%",
  },
  _login_btn_text: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 5,
    paddingTop: 5,
  },
  _guest_button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  _guest_button_text: {
    color: "white",
    fontSize: 15,
    marginRight: 5,
  },
});
export default SplashScreen;

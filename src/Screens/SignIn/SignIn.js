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
import { FontAwesome } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SignIn = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
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
            <Text style={styles._heading}>Sign In</Text>
            <View style={{ margin: 20 }}>
              <Image
                source={require("./../../img/splashLogo.png")}
                style={styles._logo}
              />
              {/* input */}
              <TextInput
                placeholder="User ID*"
                value={text}
                onChangeText={(text) => setText(text)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="black"
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Password**"
                value={password}
                onChangeText={(password) => setPassword(password)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="black"
                secureTextEntry={true}
              />
              {/* Forgot Password  */}
              <TouchableOpacity>
                <Text style={styles._forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
              {/* Buttons Main */}
              <TouchableOpacity
                style={styles._login_btn}
                onPress={() => props.navigation.navigate("SelectCategory")}
              >
                <Text style={styles._login_btn_text}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles._facebook_button}>
                <View style={styles._facebook_button_icon}>
                  <FontAwesome name="facebook-f" size={24} color="white" />
                </View>
                <Text style={styles._login_btn_text}>
                  Sign In with Facebook
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles._google_button}>
                <View style={styles._google_button_icon}>
                  <Image
                    source={require("./../../img/google.png")}
                    style={styles._google_logo}
                  />
                </View>
                <Text style={styles._login_btn_text}>Sign In with Google</Text>
              </TouchableOpacity>

              <View style={styles._dont_account_main}>
                <Text style={styles._dont_account_main_heading}>
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("SignUp")}
                >
                  <Text style={styles._singUp_btn}>Sign Up</Text>
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
  _logo: {
    width: 110,
    height: 118,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  _login_btn: {
    backgroundColor: "#F7931E",
    padding: 5,
    borderRadius: 5,
    width: "100%",
    marginTop: 20,
  },
  _login_btn_text: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 5,
    paddingTop: 5,
    color: "white",
    fontWeight: "bold",
  },
  _heading: {
    marginLeft: 20,
    marginTop: 20,
    color: "white",
    fontSize: 20,
  },
  _input: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  _forgotPassword: {
    color: "white",
    fontSize: 15,
    alignSelf: "flex-end",
    marginTop: 10,
  },
  _facebook_button: {
    backgroundColor: "#F7931E",
    padding: 5,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  _facebook_button_icon: {
    width: 36,
    height: 36,
    backgroundColor: "#4A7AFF",
    borderRadius: 36 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _google_button: {
    backgroundColor: "#F7931E",
    padding: 5,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  _google_button_icon: {
    width: 36,
    height: 36,
    backgroundColor: "transparent",
    borderRadius: 36 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _google_logo: {
    width: 28,
    height: 28,
  },
  _dont_account_main: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  _dont_account_main_heading: {
    color: "white",
    fontSize: 18,
  },
  _singUp_btn: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default SignIn;

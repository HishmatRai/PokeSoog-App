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
// import { RadioButton } from 'react-native-paper';
import RadioButton from "./../../Component/RadioButton/RadioButton";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SignUp = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [activeBtn, setActiveBtn] = useState(0);
  const [checked, setChecked] = React.useState("Individual");
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  let HeadingData = [{ heading: "Individual" }, { heading: "Business" }];
  const radioBtnCheckedValue = (value) => {
    setChecked(value);
    
};
const handler_signup =  (value) => {
//    alert(value)
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
            <Text style={styles._heading}>Sign Up</Text>
            <View style={{ margin: 20 }}>
              <Image
                source={require("./../../img/splashLogo.png")}
                style={styles._logo}
              />

              {/* select account catagery */}
              <RadioButton radioBtnCheckedValue={radioBtnCheckedValue} />
              {/* input */}
              <View style={styles._first_last_name}>
                <TextInput
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={(firstName) => setFirstName(firstName)}
                  style={styles._input2}
                  underlineColor="black"
                  placeholderTextColor="black"
                />
                <TextInput
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={(lastName) => setLastName(lastName)}
                  style={styles._input2}
                  underlineColor="black"
                  placeholderTextColor="black"
                />
              </View>
              <TextInput
                placeholder="Email Address"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="black"
              />
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

              {/* Buttons Main */}
              <TouchableOpacity
                style={styles._login_btn}
                onPress={() => props.navigation.navigate("SignIn")}
                // onPress={() => handler_signup()}
              >
                <Text style={styles._login_btn_text}>Sign Up</Text>
              </TouchableOpacity>

              <View style={styles._dont_account_main}>
                <Text style={styles._dont_account_main_heading}>
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("SignIn")}
                >
                  <Text style={styles._singUp_btn}>Sign In</Text>
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
  _input2: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    width: "47%",
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
  _catagery_select_main: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _first_last_name: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default SignUp;

import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RadioButton } from "react-native-paper";
const RadioButton1 = (props) => {
  const [checked, setChecked] = React.useState("Individual");
  return (
    <View style={styles._main}>
      <View style={styles._select_gender}>
        <RadioButton
          value="Individual"
          status={checked === "Individual" ? "checked" : "unchecked"}
          onPress={() => (
            setChecked("Individual"), props.radioBtnCheckedValue("Individual")
          )}
          uncheckedColor="white"
          color="white"
        />
        <Text style={styles._select_text}>Individual</Text>
      </View>
      <View style={styles._select_gender2}>
        <RadioButton
          value="Business"
          status={checked === "Business" ? "checked" : "unchecked"}
          onPress={() => (
            setChecked("Business"), props.radioBtnCheckedValue("Business")
          )}
          uncheckedColor="white"
          color="white"
        />
        <Text style={styles._select_text}>Business</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  _main: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _select_gender: {
    flexDirection: "row",
    alignItems: "center",
  },
  _select_gender2: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 50,
  },
  _select_text: {
    color: "white",
    fontSize: 16,
  },
});

export default RadioButton1;

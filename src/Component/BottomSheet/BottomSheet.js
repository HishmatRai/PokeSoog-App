import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
import DropDownPicker from "react-native-dropdown-picker";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
const BottomSheet = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [activeBtn, setActiveBtn] = useState(0);
  const [search, setSearch] = React.useState("");
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);
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
      {/* <<<<<<<<<<<<<<<<<<<<<<<  bottom sheet >>>>>>>>>>>>>>>>>>>>> */}
      <ScrollView>
        <View style={{ marginRight: 30, marginLeft: 30, marginTop: 10 }}>
          <View style={styles._search_main}>
            <TextInput
              placeholder="Search the cards......."
              value={search}
              onChangeText={(search) => setSearch(search)}
              style={styles._input}
              underlineColor="black"
              placeholderTextColor="#9C9C9C"
            />
            <TouchableOpacity style={styles._search_button}>
              <AntDesign name="search1" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles._heading}>Select your country</Text>
            <DropDownPicker
              items={[
                // { label: '- - - -  Who you are - - - -', value: 'whoareyou', },
                { label: "Pakistan", value: "Pakistan" },
                { label: "India", value: "India" },
              ]}
              defaultIndex={0}
              containerStyle={{ height: 40 }}
              onChangeItem={(item) => console.log(item.label, item.value)}
              placeholder="Country"
              itemStyle={{ justifyContent: "flex-start" }}
              style={{ backgroundColor: "white", color: "white" }}
              arrowColor="#9C9C9C"
              labelStyle={{
                fontSize: 14,
                textAlign: "left",
                color: "#9C9C9C",
              }}
              selectedLabelStyle={{
                color: "#9C9C9C",
              }}
              dropDownStyle={{ backgroundColor: "#008080" }}
              // onChangeItem={(item) => setSelectValue(item.value)}
            />
          </View>
          <View>
            <Text style={styles._heading2}>Price</Text>
            <RangeSlider
              min={0}
              max={100}
              fromValueOnChange={(value) => setFromValue(value)}
              toValueOnChange={(value) => setToValue(value)}
              initialFromValue={35}
              initialToValue={70}
              fromKnobColor="#F7931E"
              toKnobColor="#F7931E"
              inRangeBarColor="#008080"
              outOfRangeBarColor="#E9E9E9"
              rangeLabelsTextColor="#9C9C9C"
            />
            {/* <Text>from value:  {fromValue}</Text>
                    <Text>to value:  {toValue}</Text> */}
          </View>
          <View style={{ marginTop: 0 }}>
            <Text style={styles._heading}>Set</Text>
            <DropDownPicker
              items={[
                // { label: '- - - -  Who you are - - - -', value: 'whoareyou', },
                { label: "Pakistan", value: "Pakistan" },
                { label: "India", value: "India" },
              ]}
              defaultIndex={0}
              containerStyle={{ height: 40 }}
              onChangeItem={(item) => console.log(item.label, item.value)}
              placeholder="Box"
              itemStyle={{ justifyContent: "flex-start" }}
              style={{ backgroundColor: "white", color: "white" }}
              arrowColor="#9C9C9C"
              labelStyle={{
                fontSize: 14,
                textAlign: "left",
                color: "#9C9C9C",
              }}
              selectedLabelStyle={{
                color: "#9C9C9C",
              }}
              dropDownStyle={{ backgroundColor: "#008080" }}
              // onChangeItem={(item) => setSelectValue(item.value)}
            />
          </View>
           {/* bbutton */}
           <TouchableOpacity style={styles._pay_button}>
                <Text style={styles._pay_button_text}>Search</Text>
              </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 40 }}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _search_main: {
    borderColor: "#E9E9E9",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _search_button: {
    backgroundColor: "#F7931E",
    height: 40,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderLeftColor: "#E9E9E9",
    borderLeftWidth: 1,
  },
  _input: {
    padding: 6,
    width: "80%",
    fontSize: 13,
    color: "#9C9C9C",
    paddingLeft: 10,
  },
  _heading: {
    fontSize: 17,
    color: "#707070",
    marginBottom: 10,
  },
  _heading2: {
    fontSize: 17,
    color: "#707070",
    marginTop: 10,
    marginBottom: -20,
  },
  _pay_button: {
    backgroundColor: "#F7931E",
    borderRadius: 5,
    paddingBottom: 8,
    paddingTop: 5,
    marginTop: 20,
    width: "60%",
    alignSelf: "center",
  },
  _pay_button_text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default BottomSheet;

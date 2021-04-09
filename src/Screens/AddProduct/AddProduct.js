import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const AddProduct = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [productName, setProductName] = React.useState("");
  const [productDescription, setProductDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [galleryPic, setGalleryPic] = useState(null);
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  const openGallert = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setGalleryPic(result.uri);
    }
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
                <Text style={styles._header_heading}>Add product</Text>
              </View>

              {/* input */}
              <TextInput
                placeholder="Product name"
                value={productName}
                onChangeText={(productName) => setProductName(productName)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="black"
              />

              {/* <<<<<<<< Dropwown >>>>>>>>> */}
              <View style={{ marginTop: 10 }}>
                <DropDownPicker
                  items={[
                    { label: "Karachi", value: "Karachi" },
                    { label: "Hyderabad", value: "Hyderabad" },
                  ]}
                  defaultIndex={0}
                  containerStyle={{ height: 40 }}
                  onChangeItem={(item) => console.log(item.label, item.value)}
                  placeholder="Product category"
                  itemStyle={{ justifyContent: "flex-start" }}
                  style={{ backgroundColor: "white", color: "white" }}
                  arrowColor="black"
                  labelStyle={{
                    fontSize: 14,
                    textAlign: "left",
                    color: "black",
                  }}
                  selectedLabelStyle={{
                    color: "black",
                  }}
                  dropDownStyle={{ backgroundColor: "#008080" }}
                  // onChangeItem={(item) => setSelectValue(item.value)}
                />
              </View>

              <TextInput
                placeholder="Product description"
                value={productDescription}
                onChangeText={(productDescription) =>
                  setProductDescription(productDescription)
                }
                style={styles._input2}
                underlineColor="black"
                placeholderTextColor="black"
                multiline={true}
              />

              <Text style={{ color: "white", fontSize: 14, marginTop: 20 }}>
                Upload Picture
              </Text>
              <View style={styles._upload_picture_main}>
                <TouchableOpacity
                  style={styles._add_picture_button}
                  onPress={() => openGallert()}
                >
                  <Entypo name="camera" size={24} color="#7D7D7D" />
                </TouchableOpacity>
              </View>

              <TextInput
                placeholder="Price"
                value={price}
                onChangeText={(price) => setPrice(price)}
                style={styles._input}
                underlineColor="black"
                placeholderTextColor="black"
                keyboardType="numeric"
              />

              {/* bbutton */}
              <TouchableOpacity
                style={styles._pay_button}
                onPress={() => props.navigation.navigate("PokemonForMember")}
              >
                <Text style={styles._pay_button_text}>Save</Text>
              </TouchableOpacity>
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
    marginBottom: 30,
  },
  _header_heading: {
    color: "white",
    fontSize: 20,
    marginLeft: 5,
  },
  _input: {
    paddingTop: 5,
    paddingBottom: 5,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  _input2: {
    paddingTop: 0,
    paddingBottom: 5,
    color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    height: 100,
  },
  _upload_picture_main: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 100,
    width: 100,
    marginTop: 20,
    alignItems: "flex-end",
    padding: 5,
  },
  _add_picture_button: {
    marginTop: 70,
  },
  _pay_button: {
    backgroundColor: "#F7931E",
    borderRadius: 5,
    paddingBottom: 8,
    paddingTop: 5,
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  _pay_button_text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default AddProduct;

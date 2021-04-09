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
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from "./../../Component/BottomSheet/BottomSheet";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SellCards = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [remember, setRemember] = useState(false);
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  let CardData = [
    {
      price: "$4.99",
      des: " Pokemon sowrd and sheild battle styles booster packs",
    },
    {
      price: "$4.99",
      des: " Pokemon sowrd and sheild battle styles booster packs",
    },
    {
      price: "$4.99",
      des: " Pokemon sowrd and sheild battle styles booster packs",
    },
    {
      price: "$4.99",
      des: " Pokemon sowrd and sheild battle styles booster packs",
    },
  ];
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity>
                    <Ionicons
                      name="chevron-back-outline"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                  <Text style={styles._header_heading}>Welcome seller</Text>
                </View>
                <TouchableOpacity onPress={() => this.RBSheet.open()}>
                  <Ionicons name="filter-sharp" size={24} color="white" />
                </TouchableOpacity>
              </View>

              {/* Sub Header  */}
              <View style={styles._sub_header_main}>
                <View style={styles._sub_header__first_column}>
                  <TouchableOpacity style={styles._ative_tab_show}>
                    <Text style={styles._ative_tab_number}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles._tab_two}>
                    <Text style={styles._tab_two_number}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles._next_button}>
                    <Text style={styles._next_button_text}>Next</Text>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={14}
                      color="#F7931E"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Card  */}
              {CardData.map((v, i) => {
                return (
                  <View style={styles._card_main}>
                    <TouchableOpacity
                      style={styles._card}
                      onPress={() => props.navigation.navigate("PokemanSword")}
                    >
                      <Image
                        source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
                        style={styles.card_img}
                      />
                      <Text style={styles._card_Des}>{v.des}</Text>
                      <Text style={styles._card_price}>{v.price}</Text>
                      {/* <<<<<<<< Remember >>>>>>>>> */}
                      <View style={styles._remember_main}>
                        {remember ? (
                          <MaterialCommunityIcons
                            name="checkbox-multiple-marked-outline"
                            size={14}
                            color="white"
                            onPress={() => setRemember(!remember)}
                          />
                        ) : (
                          <MaterialCommunityIcons
                            name="checkbox-multiple-marked"
                            size={14}
                            color="white"
                            onPress={() => setRemember(!remember)}
                          />
                        )}
                        <Text style={styles._remember_text}>Compare</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles._card}
                      onPress={() => props.navigation.navigate("PokemanSword")}
                    >
                      <Image
                        source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
                        style={styles.card_img}
                      />
                      <Text style={styles._card_Des}>{v.des}</Text>
                      <Text style={styles._card_price}>{v.price}</Text>
                      {/* <<<<<<<< Remember >>>>>>>>> */}
                      <View style={styles._remember_main}>
                        {remember ? (
                          <MaterialCommunityIcons
                            name="checkbox-multiple-marked-outline"
                            size={14}
                            color="white"
                            onPress={() => setRemember(!remember)}
                          />
                        ) : (
                          <MaterialCommunityIcons
                            name="checkbox-multiple-marked"
                            size={14}
                            color="white"
                            onPress={() => setRemember(!remember)}
                          />
                        )}
                        <Text style={styles._remember_text}>Compare</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
        {/* <<<<<<<<<<<<<<<<<<<<<<<  bottom sheet >>>>>>>>>>>>>>>>>>>>> */}
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={500}
          openDuration={250}
          customStyles={{
            container: {
              borderTopEndRadius: 20,
              borderTopLeftRadius: 20,
            },
          }}
        >
          <View
            style={{
              marginRight: 30,
              marginLeft: 30,
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 17, color: "#707070" }}>Filter</Text>
            <TouchableOpacity onPress={() => this.RBSheet.close()}>
              <AntDesign name="close" size={24} color="#707070" />
            </TouchableOpacity>
          </View>
          <BottomSheet />
        </RBSheet>
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
    height: "100%",
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _header_heading: {
    color: "white",
    fontSize: 20,
    marginLeft: 5,
  },
  _sub_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  _sub_header__first_column: {
    flexDirection: "row",
    alignItems: "center",
  },
  _next_button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 3,
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  _ative_tab_show: {
    backgroundColor: "#F7931E",
    width: 20,
    height: 20,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _ative_tab_number: {
    color: "white",
    fontSize: 10,
  },
  _tab_two: {
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _tab_two_number: {
    color: "#F7931E",
    fontSize: 10,
  },
  _next_button_text: {
    fontSize: 14,
    color: "#F7931E",
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 50,
  },
  _card: {
    elevation: 2,
    width: "46%",
    borderRadius: 15,
    padding: 20,
    backgroundColor: "rgba(0,146,146, 100)",
  },
  card_img: {
    width: 80,
    height: 80,
    borderRadius: 5,
    alignSelf: "center",
  },
  _card_Des: {
    color: "white",
    fontSize: 11,
    textAlign: "center",
    marginTop: 10,
  },
  _card_price: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  _remember_main: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  _remember_text: {
    color: "white",
    fontSize: 10,
    marginLeft: 5,
  },
});
export default SellCards;

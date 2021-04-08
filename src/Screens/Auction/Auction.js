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
  Fontisto,
  AntDesign
} from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from "./../../Component/BottomSheet/BottomSheet";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Auction = (props) => {
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
                  <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons
                      name="chevron-back-outline"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                  <Text style={styles._header_heading}>Auction</Text>
                </View>
                <TouchableOpacity onPress={() => this.RBSheet.open()}>
                  <Ionicons name="filter-sharp" size={24} color="white" />
                </TouchableOpacity>
              </View>
              {/* Slier */}
              <ScrollView horizontal={true}>
                <View style={styles._slider_main}>
                  <View style={styles._slider_card}>
                    <ImageBackground
                      source={require("./../../img/tcg-design-a-deck-169-en.jpg")}
                      style={styles._image2}
                    >
                      <Text style={styles._per_off}>30% off </Text>
                    </ImageBackground>
                  </View>
                  <View style={styles._slider_card}>
                    <ImageBackground
                      source={require("./../../img/tcg-design-a-deck-169-en.jpg")}
                      style={styles._image2}
                    >
                      <Text style={styles._per_off}>50% off </Text>
                    </ImageBackground>
                  </View>
                </View>
              </ScrollView>
              {/*  */}
              <Text style={{ color: "white", fontSize: 20, marginTop: 30 }}>
                Featured
              </Text>
              {/* Card  */}
              {CardData.map((v, i) => {
                return (
                  <View style={styles._card_main}>
                    <View style={styles._card}>
                      <Image
                        source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
                        style={styles.card_img}
                      />
                      <Text style={styles._card_Des}>{v.des}</Text>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "80%", alignSelf: "center" }}>
                        <Image
                          source={require("./../../img/action.png")}
                          style={styles.action_img}
                        />
                        <Text style={styles._card_price}>16 Bid</Text>
                        <Text style={styles._card_price}>{v.price}</Text>
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "80%", alignSelf: "center",marginTop:5 }}>
                      <Fontisto name="date" size={15} color="white" />
                      <Text style={styles._card_price}>23 h 35min</Text>
                        </View>
                        <TouchableOpacity style={styles._bid_button} onPress={() => props.navigation.navigate("PlaceBid")}>
                          <Text style={styles._bid_button_text}>Bid Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles._card}>
                      <Image
                        source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
                        style={styles.card_img}
                      />
                      <Text style={styles._card_Des}>{v.des}</Text>
                     
                      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "80%", alignSelf: "center" }}>
                        <Image
                          source={require("./../../img/action.png")}
                          style={styles.action_img}
                        />
                        <Text style={styles._card_price}>16 Bid</Text>
                        <Text style={styles._card_price}>{v.price}</Text>
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "80%", alignSelf: "center",marginTop:5 }}>
                      <Fontisto name="date" size={15} color="white" />
                      <Text style={styles._card_price}>23 h 35min</Text>
                        </View>
                        <TouchableOpacity style={styles._bid_button} onPress={() => props.navigation.navigate("PlaceBid")}>
                          <Text style={styles._bid_button_text}>Bid Now</Text>
                        </TouchableOpacity>
                    </View>
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

  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
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
    // marginTop: 5,
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
  _slider_main: {
    marginTop: 20,
    flexDirection: "row"
  },
  _slider_card: {
    width: 250,
    height: 128,
    marginRight: 20
  },
  _image2: {
    flex: 1,
    resizeMode: "cover",
    height: 128,
  },
  _per_off: {
    backgroundColor: "#004545",
    width: "40%",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  action_img: {
    width: 11,
    height: 11
  },
  _bid_button:{
    backgroundColor:"#F7931E",
    width:"60%",
    alignSelf:"center",
    marginTop:10,
    borderColor:"#707070",
    borderWidth:1
  },
  _bid_button_text:{
    color:"white",
    textAlign:"center",
    fontSize:12,
    paddingBottom:5,
    paddingTop:5
  }
});
export default Auction;

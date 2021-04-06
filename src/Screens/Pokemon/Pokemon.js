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
import { Ionicons } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Pokemon = (props) => {
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
                                <TouchableOpacity>
                                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                                </TouchableOpacity>
                                <Text style={styles._header_heading}>Pokemon</Text>
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
                                        <Ionicons name="chevron-forward-outline" size={14} color="#F7931E" />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Ionicons name="filter-sharp" size={24} color="white" />
                                </TouchableOpacity>
                            </View>

                            {/* Card  */}
                            <View style={styles._card_main}>
                                <View style={styles._card}>
                                    <ImageBackground
                                        source={require("./../../img/backgroundImg.png")}
                                        style={styles._image}
                                    >
                                        <Image
                                            source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
                                            style={styles._logo}
                                        />
                                        <Text>fdfsf</Text>
                                    </ImageBackground>
                                </View>
                                <View style={styles._card}>
                                    <ImageBackground
                                        source={require("./../../img/backgroundImg.png")}
                                        style={styles._image}
                                    >
                                        <Image
                                            source={require("./../../img/Pokemon-Trading-Card-Game-Sword-and-Shield-Sleeved-Booster-Pack.jpg")}
                                            style={styles._logo}
                                        />
                                        <Text>fdfsf</Text>
                                    </ImageBackground>
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
    _header_main: {
        flexDirection: "row",
        alignItems: "center"
    },
    _header_heading: {
        color: "white",
        fontSize: 20,
        marginLeft: 5
    },
    _sub_header_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    },
    _sub_header__first_column: {
        flexDirection: "row",
        alignItems: "center"
    },
    _next_button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 3,
        height: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    _ative_tab_show: {
        backgroundColor: "#F7931E",
        width: 20,
        height: 20,
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    _ative_tab_number: {
        color: "white",
        fontSize: 10
    },
    _tab_two: {
        backgroundColor: "white",
        width: 20,
        height: 20,
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    _tab_two_number: {
        color: "#F7931E",
        fontSize: 10
    },
    _next_button_text: {
        fontSize: 14,
        color: "#F7931E"
    },
    _card_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 20
    },
    _card: {
        elevation: 8,
        width: "46%",
        borderRadius: 15,
       padding:5
    },
    _logo: {
        width: 80,
        height: 80,
        borderRadius: 5,
        alignSelf:"center"
    }

});
export default Pokemon;

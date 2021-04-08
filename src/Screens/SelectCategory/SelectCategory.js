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
import { Feather } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SelectCategory = (props) => {
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
                            <TouchableOpacity>
                                <Feather name="menu" size={24} color="white" />
                            </TouchableOpacity>
                            <View style={styles.select_main}>
                                <TouchableOpacity onPress={() => props.navigation.navigate("Pokemon")}>
                                    <Image
                                        source={require("./../../img/select_pokemon.png")}
                                        style={styles.select_pokemon}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.select_heading}>Pokemon</Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require("./../../img/Drangon_Ball.png")}
                                        style={styles.select_pokemon}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.select_heading}>Drangon Ball</Text>
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
    select_main: {
        alignSelf: "center",
        paddingTop: 50
    },
    select_pokemon: {
        width: 201,
        height: 201,
        borderRadius: 200 / 2,
        marginTop: 10
    },
    select_heading: {
        color: "white",
        fontSize: 34,
        textAlign: "center",
        marginTop: 10
    }

});
export default SelectCategory;

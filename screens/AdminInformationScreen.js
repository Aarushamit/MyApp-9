import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Header, Icon } from "react-native-elements";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config.js";
import Hyperlink from 'react-native-hyperlink';
import { ImageBackground } from "react-native";

export default class AdminInformationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: firebase.auth().currentUser.email,
            laptopName: this.props.navigation.getParam("details")["laptop_name"],
            processor: this.props.navigation.getParam("details")["processor"],
            ram: this.props.navigation.getParam("details")["ram"],
            storage: this.props.navigation.getParam("details")["storage"],
            userType: this.props.navigation.getParam("details")["user_type"],
            graphicsCard: this.props.navigation.getParam("details")["graphics_card"],
            buyingLink: this.props.navigation.getParam("details")["buying_link"],
        };
    }
    render() {
        return (
            <ImageBackground source = {require("../assets/texture3_edited.jpg")} style = {{flex: 1, backgroundColor: "transparent"}}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.1 }}>
                    <Header
                        leftComponent={
                            <Icon
                                name="arrow-left"
                                type="feather"
                                color="black"
                                onPress={() => this.props.navigation.goBack()}
                            />
                        }
                        centerComponent={{
                            text: "Search Laptops",
                            style: {
                                color: "black",
                                fontSize: RFValue(20),
                                fontWeight: "bold",
                            },
                        }}
                        backgroundColor="#40E0D0"
                    />
                </View>
                <View style={{ flex: 0.9 }}>
                    <View
                        style={{
                            flex: 0.3,
                            flexDirection: "row",
                            paddingTop: RFValue(30),
                            paddingLeft: RFValue(10),
                        }}
                    >
                        <View
                            style={{
                                flex: 0.6,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "500",
                                    fontSize: RFValue(25),
                                    textAlign: "center",
                                }}
                            >
                                {this.state.laptopName}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 0.7,
                            padding: RFValue(20),
                        }}
                    >
                        <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', marginTop: RFValue(50), borderWidth: 1, borderColor: '#deeedd', padding: RFValue(10) }}>
                            <Text
                                style={{
                                    fontWeight: "500",
                                    fontSize: RFValue(30),
                                }}
                            >
                                Laptop Information
              </Text>
                            <ScrollView>
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: RFValue(20),
                                        marginTop: RFValue(30),
                                    }}
                                >
                                    Processor: {this.state.processor}
                                    {console.log("got processor")}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: RFValue(20),
                                        marginTop: RFValue(30),
                                    }}
                                >ram: {this.state.ram}
                                    {console.log("got ram")}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: RFValue(20),
                                        marginTop: RFValue(30),
                                    }}
                                >
                                    Graphics Card: {this.state.graphicsCard}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: RFValue(20),
                                        marginTop: RFValue(30),
                                    }}
                                >
                                    Storage: {this.state.storage}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: RFValue(20),
                                        marginTop: RFValue(30),
                                    }}
                                >
                                    Type of User: {this.state.userType}
                                </Text>
                                <Hyperlink
                                    linkDefault
                                    linkStyle={{ color: "#2980b9" }}
                                    linkText={url => url === 'amazon.in' ? " Amazon" : url}
                                >
                                    <Text
                                        style={{
                                            fontWeight: "400",
                                            fontSize: RFValue(20),
                                            marginTop: RFValue(30),
                                        }}
                                    >
                                        Where to Buy: {this.state.buyingLink}
                                    </Text>
                                </Hyperlink>
                            </ScrollView>

                        </View>
                    </View>
                </View>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: "75%",
        height: RFValue(60),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(60),
        backgroundColor: "#ff5722",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        elevation: 16,
    },
});
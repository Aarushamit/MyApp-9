import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Card, Header, Icon } from "react-native-elements";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config.js";
import { ScrollView } from "react-native-gesture-handler";

export default class InformationScreen extends Component {
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
            personalExperience: this.props.navigation.getParam("details")["personal_experience"],
        };
    }

    // getLaptopDetails() {
    //     db.collection("recommendations")
    //         .where("user_id", "==", this.state.userId)
    //         .get()
    //         .then((snapshot) => {
    //             snapshot.forEach((doc) => {
    //                 this.setState({
    //                     laptopName: doc.data().laptop_name,
    //                     processor: doc.data().processor,
    //                     ram: doc.data().ram,
    //                     storage: doc.data().storage,
    //                     graphicsCard: doc.data().graphics_card,
    //                     userType: doc.data().user_type,
    //                 });
    //             });
    //         });
    // }

    // componentDidMount() {
    //     this.getLaptopDetails();
    // }

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
                            text: "Search Suggestions",
                            style: {
                                color: "black",
                                fontSize: RFValue(19),
                                fontWeight: "bold",
                            },
                        }}
                        
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
                                    Laptop Name : {this.state.laptopName}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: RFValue(20),
                                        marginTop: RFValue(30),
                                    }}
                                >
                                    Processor: {this.state.processor}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: RFValue(20),
                                        marginTop: RFValue(30),
                                    }}
                                >
                                    ram: {this.state.ram}
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
                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: RFValue(20),
                                        marginTop: RFValue(30),
                                    }}
                                >
                                    personal experience: {this.state.personalExperience}
                                </Text>
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
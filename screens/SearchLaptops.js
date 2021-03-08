import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";
import { ImageBackground } from "react-native";

export default class SearchLaptops extends Component {
    constructor() {
        super()
        this.state = {
            allLaptops: [],
            search: "",
            dataSource: []
        }
        this.laptopRef = null;
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

            </View>
        )
    }

    getLaptopDetails = () => {
        // this.laptopRef = db
        //     .collection("laptops")
        //     .onSnapshot((snapshot) => {
        //         var allLaptops = snapshot.docs.map((doc) => doc.data());
        //         this.setState({
        //             allLaptops: allLaptops,
        //         });
        //     });

        try {
            var allLaptops = []
            var laptops = db.collection("laptops")
                .get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots

                        allLaptops.push(doc.data())
                        console.log('this are the laptops', allLaptops)
                    })
                    this.setState({ allLaptops: allLaptops })
                })
        }
        catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.getLaptopDetails();
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, i }) => {
        return (
            <ImageBackground source = {require("../assets/texture3_edited.jpg")} style = {{flex: 1, backgroundColor: "transparent"}}>
            <ListItem
                key={i}
                title={item.laptop_name}
                subtitle={item.user_type}
                titleStyle={{ color: "black", fontWeight: "bold" }}
                rightElement={
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log(item)
                            this.props.navigation.navigate("AdminInformation", {
                                details: item,
                            });
                        }}
                    >
                        <Text style={{ color: "#000000" }}>View</Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
            </ImageBackground>
        );
    };


    SearchFilterFunction = async (text) => {

        const newData = this.state.allLaptops.filter((item) => {

            const itemData = item.laptop_name ? item.laptop_name.toUpperCase() : user_type.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            dataSource: newData,
            search: text,
        });
    }
    render() {
        return (
            <ImageBackground source = {require("../assets/texture3_edited.jpg")} style = {{flex: 1, backgroundColor: "transparent"}}>
            <View style={styles.view}>
                <MyHeader title="Search Laptops" navigation={this.props.navigation} />
                <View styles={{ height: 20, width: '100%' }}>
                    <SearchBar
                        placeholder="Search by laptop name here..."
                       // style = {{backgroundColor: "#00CED1"}}
                        onChangeText={(text) => {
                            this.setState({

                                search: text
                            })
                            this.SearchFilterFunction(text)
                        }}
                        onClear={text => this.getLaptopDetails}
                        value={this.state.search}
                    />
                </View>

                <View style={{ flex: 1, backgroundColor: "#FFE4C4" }}>
                    {this.state.allLaptops.length === 0 ? (
                        <View style={styles.subContainer}>
                            <Text style={{ fontSize: 20 }}>No laptops to show, try again later</Text>
                        </View>
                    ) : (
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.search === "" ? this.state.allLaptops : this.state.dataSource}
                                renderItem={this.renderItem}
                            />
                        )}
                </View>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 100,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#40E0D0",
        shadowOffset: {
            width: 2,
            height: 8,
        },
    },
    view: {
        flex: 1,
        backgroundColor: "#F5F5DC"
    }
});
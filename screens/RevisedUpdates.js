import React, { Component } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableHighlight,
    Alert,
    Image,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import { ListItem, Card } from "react-native-elements";

import MyHeader from "../components/MyHeader";

export default class RevisedUpdates extends React.Component {
    constructor() {
        super();

        this.state = {
            userId: firebase.auth().currentUser.email,
            updates: [],
        };
        this.updateRef = null
    }

    getUpdatesList = () => {
        //this.updateRef = db.collection("updates").limit(5).get()
        //
        this.updateRef = db.collection("updates")
            .onSnapshot((snapshot) => {
                var myUpdates = snapshot.docs.map((doc) => doc.data())
                this.setState({
                    updates: myUpdates,
                });

            })
    }

    componentDidMount() {
        this.getUpdatesList();
    }
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item, i }) => {
        return (
            <ListItem
                key={i}
                title={item.title}
                subtitle={item.short_description}
                titleStyle={{ color: "black", fontWeight: "bold" }}
                content={<Card title={item.title} style={{ marginTop: 20 }}>
                    <View>
                        <Image style={{ width: 50, height: 50 }} source={require("../assets/laptop.png")} />
                    </View>
                </Card>}
                bottomDivider
            />
        );
    };
    render() {
        return (
            <View style={styles.view}>
                <View style={{ flex: 0.1 }}>
                    <MyHeader title="Updates" navigation={this.props.navigation} />
                </View>
                <View style={{ flex: 1 }}>
                    {this.state.updates.length === 0 ? (
                        <View style={styles.subContainer}>
                            <Text style={{ fontSize: 20 }}>List of All Latest Updates</Text>
                        </View>
                    ) : (
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.updates}
                                renderItem={this.renderItem}
                            />
                        )}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#39ff14"
    },
    subContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
    },

})
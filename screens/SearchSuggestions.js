import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";

export default class SearchSuggestions extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      userSuggestions: [],
    };
    this.suggestionRef = null;
  }

  getSuggestionsList = () => {
    this.suggetionRef = db
      .collection("recommendations")
      .onSnapshot((snapshot) => {
        var userSuggestions = snapshot.docs.map((doc) => doc.data());
        this.setState({
          userSuggestions: userSuggestions,
        });
      });
  };

  componentDidMount() {
    this.getSuggestionsList();
  }


  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
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
              this.props.navigation.navigate("Information", {
                details: item,
              });
            }}
          >
            <Text style={{ color: "#000000" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={styles.view}>
        <MyHeader title="Search Suggestions" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.userSuggestions.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List of All User Suggestion</Text>
            </View>
          ) : (
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.userSuggestions}
                renderItem={this.renderItem}
              />
            )}
        </View>
      </View>
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
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 8,
    },
  },
  view: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});

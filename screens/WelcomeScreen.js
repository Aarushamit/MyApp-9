import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import db from "../config";
import firebase from "firebase";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import LaptopAnimation from "../components/LaptopAnimation";
import { Platform } from "react-native";

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
      isModalVisible: "false",
      contact: ""
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email_id: this.state.emailId,
            contact: this.state.contact
          });
          return Alert.alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false })
            }
          ]);
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("SearchLaptops");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <ScrollView style={styles.scrollview}>
          <View style={styles.signupView}>
            <Text style={styles.signupText}> SIGN UP </Text>
          </View>
          <View style={{ flex: 0.95 }}>
            <Text style={styles.label}>First Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"First Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  firstName: text
                });
              }}
            />

            <Text style={styles.label}>Last Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Last Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  lastName: text
                });
              }}
            />
            <Text style={styles.label}>Contact </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Contact"}
              maxLength={10}
              keyboardType={"numeric"}
              onChangeText={text => {
                this.setState({
                  contact: text
                });
              }}
            />

            <Text style={styles.label}>Email </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Email"}
              keyboardType={"email-address"}
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />

            <Text style={styles.label}> Password </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Confrim Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  confirmPassword: text
                });
              }}
            />
          </View>

          <View style={{ flex: 0.2, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
                this.userSignUp(
                  this.state.emailId,
                  this.state.password,
                  this.state.confirmPassword
                )
              }
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <Text
              style={styles.cancelButtonText}
              onPress={() => {
                this.setState({ isModalVisible: false });
              }}
            >
              Cancel
            </Text>
          </View>
        </ScrollView>
      </Modal>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.showModal()}
        <View style={{ flex: 0.25, alignItems: "center" }}>
          <LaptopAnimation />
          <View style={{ flex: 0.15 }} />
          <View style={styles.santaView}>

            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', marginBottom: 70 }}>
              <Text style={{ fontSize: 35, color: "black", fontFamily: "sans-serif-condensed" }}> The Laptop Hub </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.45 }}>
          <View style={styles.TextInput}>

            <TextInput
              style={styles.loginBox}
              placeholder="your email ID"
              placeholderTextColor="grey"
              keyboardType="email-address"
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />
            <TextInput
              style={[styles.loginBox, { marginTop: RFValue(15) }]}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="grey"
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

          </View>
          <View style={{ flex: 0.5, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.userLogin(this.state.emailId, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => this.setState({ isModalVisible: true })}
            >
              <Text style={styles.buttonText2}>SignUp</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#40E0D0"
  },
  loginBox: {
    width: "60%",
    height: RFValue(40),
    borderWidth: 2.5,
    borderColor: "#FAEBD7",
    borderRadius: 5,
    fontSize: RFValue(20),
    paddingLeft: RFValue(10),
    marginTop: RFValue(45)
  },
  button: {
    width: "65%",
    height: RFValue(70),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#008B8B",
    shadowColor: "#000",
    marginTop: 30,
    shadowOffset: {
      width: 100,
      height: 100
    },
  },
  button2: {
    width: "80%",
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    marginTop: 50,
    shadowOffset: {
      width: 100,
      height: 100
    },
  },

  buttonText: {
    color: "#000000",
    fontWeight: "200",
    fontSize: RFValue(20)
  },

  buttonText2: {
    color: "#000000",
    fontWeight: "200",
    fontSize: 20
  },
  label: {
    fontSize: RFValue(13),
    color: "#717D7E",
    fontWeight: "bold",
    paddingLeft: RFValue(10),
    marginLeft: RFValue(20)
  },
  formInput: {
    width: "90%",
    height: RFValue(40),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#40E0D0",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14)
  },
  registerButton: {
    width: "60%",
    height: RFValue(70),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#008B8B",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10)
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff"
  },
  cancelButtonText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "black",
    marginTop: RFValue(10)
  },
  scrollview: {
    flex: 1,
    backgroundColor: "#F5F5DC"
  },
  signupView: {
    flex: 0.05,
    justifyContent: "center",
    alignItems: "center"
  },
  signupText: {
    fontSize: RFValue(20),
    marginTop: RFValue(25),
    fontWeight: "bold",
    color: "#40E0D0"
  },
  santaView: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  santaImage: {
    width: "70%",
    height: "100%",
    resizeMode: "stretch"
  },
  TextInput: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  bookImage: {
    width: "100%",
    height: RFValue(220)
  }
});

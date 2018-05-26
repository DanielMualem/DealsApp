import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";


export default class SignIn extends Component {
  // constructor
  constructor(props) {
    super(props);
    // members
    this.state = {
      navigation: this.props.navigation,
      username: '',
      password: '',
      email: '',
      mobile: '',
      storeName: '',
      location: ''
    };
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handleUsername = (text) => {
    this.setState({ username: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleMobile = (text) => {
    this.setState({ mobile: text })
  }
  handleStoreName = (text) => {
    this.setState({ storeName: text })
  }
  handleLocation = (text) => {
    this.setState({ location: text })
  }

  login = () => {
		const { navigation, username, password } = this.state;

		fetch('http://35.198.155.182/storeOwner/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
		.then((response) => {return response.text();})
		.then((resp) => {
			//console.log(resp);
			if (resp == 'Yoa are logged in') {
				Alert.alert("Hey " + username + " You are logged in");
				console.log("You are logged in");
				onSignIn().then(() => navigation.navigate("SignedIn"));
			} else {
				Alert.alert("username - " + username + " or password - " + password + " is wrong");
				console.log(resp);
			}
		})
		.catch((error) => {
			console.error(error);
		});
	}

  SignUp = () => {
    const { navigation, username, password, email, mobile, storeName, location } = this.state;

    if ((username == '') || (password == '')) {
      Alert.alert("You have to enter username & password");
      return;
    }

    fetch('http://35.198.155.182/storeOwner/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        mobile: mobile,
        storeName: storeName,
        location: location
      }),
    })
    .then((response) => {return response.text();})
    .then((resp) => {
      // console.log(resp);
      if (resp == 'store registered successfully') {
        Alert.alert(resp, '',
        [
          {text: 'Continue', onPress: () => this.login()},
        ]
      )
      console.log("store registered successfully!");
    } else {
      Alert.alert("The username is not available");
      console.log("registered failed");
    }
  })
  .catch((error) => {
    console.error(error);
  });
  }



  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <ScrollView>
          <Card title="OWNER -  SIGN UP">
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address" onChangeText={this.handleEmail} />
            <FormLabel>Username</FormLabel>
            <FormInput placeholder="Username" onChangeText={this.handleUsername} />
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry placeholder="Password" onChangeText={this.handlePassword} />
            <FormLabel>Mobile</FormLabel>
            <FormInput placeholder="Mobile" onChangeText={this.handleMobile} />
            <FormLabel>Store Name</FormLabel>
            <FormInput placeholder="Store Name" onChangeText={this.handleStoreName} />
            <FormLabel>Location</FormLabel>
            <FormInput placeholder="Location" onChangeText={this.handleLocation} />

            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="SIGN UP"
              onPress={() => this.SignUp()}
            />
            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="transparent"
              textStyle={{ color: "#bcbec1" }}
              title="Sign In"
              onPress={() => this.props.navigation.navigate("OwnerSignIn")}
            />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

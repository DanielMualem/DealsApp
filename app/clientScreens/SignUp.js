import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import { login } from "../auth";


export default class SignIn extends Component {
  // constructor
  constructor(props) {
    super(props);
    // members
    this.state = {
      navigation: this.props.navigation,
      username: '',
      password: '',
      email: ''
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

	login = () => {
		const { navigation, username, password } = this.state;

    fetch('https://dealsapp.online/login', {
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
    const { navigation, username, password, email } = this.state;

      fetch('https://dealsapp.online/register', {
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
        // console.log(resp);
        if (resp == 'registered successfully') {
          Alert.alert(resp, '',
            [
              {text: 'Continue', onPress: () => this.login()},
            ]
          )
          console.log("registered successfully!");
        } else {
          Alert.alert("שם משתמש או אימייל קיים");
          console.log("registered failed");
        }
      })
  		.catch((error) => {
  			console.error(error);
  		});
  }



  render() {
    return (
      <View style={{ paddingVertical: 1 }}>
      <ScrollView>
        <Card title="הרשמה">
          <FormLabel>כתובת אימייל</FormLabel>
          <FormInput placeholder="" onChangeText={this.handleEmail} inputStyle={{ width: "100%" }}/>
          <FormLabel>שם משתמש</FormLabel>
          <FormInput placeholder="" onChangeText={this.handleUsername} inputStyle={{ width: "100%" }}/>
          <FormLabel>סיסמה</FormLabel>
          <FormInput secureTextEntry placeholder="" onChangeText={this.handlePassword} inputStyle={{ width: "100%" }}/>
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="הרשמה"
            onPress={() => this.SignUp()}
          />
        </Card>
      </ScrollView>
      </View>
    );
  }
}

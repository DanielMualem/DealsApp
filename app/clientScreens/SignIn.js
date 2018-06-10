import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import Promise from 'bluebird'


export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigation: props.navigation,
			username: '',
			password: ''
		};
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

	render() {
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card title="CLIENT - SIGN IN">
					<FormLabel>Username</FormLabel>
					<FormInput placeholder="Username" onChangeText={this.handleUsername} />
					<FormLabel>Password</FormLabel>
					<FormInput secureTextEntry placeholder="Password" onChangeText={this.handlePassword} />
					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="SIGN IN"
						onPress={() => this.login()}
					/>
					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="transparent"
						textStyle={{ color: "#bcbec1" }}
						title="Sign Up"
						onPress={() => this.props.navigation.navigate("SignUp")}
					/>
					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="transparent"
						textStyle={{ color: "#bcbec1" }}
						title="Owner?"
						onPress={() => this.props.navigation.navigate("OwnerSignIn")}
					/>

				</Card>
			</View>
		);
	}
}

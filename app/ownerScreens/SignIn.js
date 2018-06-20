import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../ownerAuth";
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

		fetch('https://dealsapp.online/storeOwner/login', {
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
				//Alert.alert("Hey " + username + " You are logged in");
				console.log("You are logged in");
				onSignIn().then(() => navigation.navigate("SignedInTabOwner"));
			} else {
				Alert.alert("שם משתמש או סיסמה לא נכונים");
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
			<ScrollView>
				<Card title="כניסה - בעל מסעדה">
					<FormLabel>שם משתמש</FormLabel>
					<FormInput placeholder="שם משתמש" onChangeText= {this.handleUsername} />
					<FormLabel>סיסמה</FormLabel>
					<FormInput secureTextEntry placeholder="סיסמה" onChangeText={(password) => this.setState({ password })} />

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="התחבר"
						onPress={() => this.login()}
					/>

				</Card>
			</ScrollView>
			</View>
		);
	}
}

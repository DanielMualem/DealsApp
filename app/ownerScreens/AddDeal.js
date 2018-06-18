import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

export default class AddDeal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigation: props.navigation,
			details: ''
		};
	}


	handleDetails = (text) => {
		this.setState({ details: text })
	}

	adddealfunc = () => {
		const { navigation, details} = this.state;

		fetch('https://dealsapp.online/storeOwner/AddDeal', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				details: details,
			}),
		})
		.then((response) => {return response.text();})
		.then((resp) => {
			console.log(resp);
			Alert.alert("Added Successfully");
			this.props.navigation.goBack();
		})
		.catch((error) => {
			console.error(error);
		});
	}

	render() {
		return (
			<View style={{ paddingVertical: 20 }}>
			<ScrollView>
				<Card title="הוספת מבצע">
					<FormLabel>פרטי מבצע</FormLabel>
					<FormInput placeholder="פרטי מבצע" onChangeText={this.handleDetails} />
					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="הוספה"
						onPress={() => this.adddealfunc()}
					/>

				</Card>
				</ScrollView>
			</View>
		);
	}
}

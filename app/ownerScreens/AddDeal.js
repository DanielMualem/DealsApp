import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

export default class AddDeal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigation: props.navigation,
			preview: '',
			details: ''
		};
	}


	handleDetails = (text) => {
		this.setState({ details: text });
	}

	handlePreview = (text) => {
		this.setState({ preview: text });
	}

	deleteAll = () => {
		fetch('https://dealsapp.online/storeOwner/deleteAllDeals');
	}

	adddealfunc = () => {
		const { navigation,preview, details } = this.state;

		fetch('https://dealsapp.online/storeOwner/AddDeal', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				preview: preview,
				details: details,
			}),
		})
		.then((response) => {return response.text();})
		.then((resp) => {
			console.log(resp);
			Alert.alert("Added Successfully");
			this.props.navigation.navigate('OwnerDeals');
			this.setState({ details: '', preview: '' });
		})
		.catch((error) => {
			console.error(error);
		});
	}

	render() {
		return (
			<View style={{ paddingVertical: 1 }}>
			<ScrollView>
				<Card title="הוספת מבצע">

					<FormLabel>תקציר המבצע</FormLabel>
					<FormInput multiline = {true} placeholder="" value={this.state.preview} onChangeText={this.handlePreview} inputStyle={{ width: "100%" }}/>
					<FormLabel>פרטי מבצע מלאים</FormLabel>
					<FormInput multiline = {true} placeholder="" value={this.state.details} onChangeText={this.handleDetails} inputStyle={{ width: "100%" }}/>

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

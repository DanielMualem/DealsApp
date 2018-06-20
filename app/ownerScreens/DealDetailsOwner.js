import React from "react";
import { ScrollView, Text, Linking, View, Image } from "react-native";
import { Card, Button } from "react-native-elements";

export default class DealDetails extends React.Component {

  deleteDeal = (deal_id) => {
    fetch('https://dealsapp.online/storeOwner/deleteDeal', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: deal_id,
			}),
		})
		.then((response) => {return response.text();})
		.then((resp) => {
			//console.log(resp);
			console.log(resp);
      this.props.navigation.navigate('OwnerDeals');
		})
		.catch((error) => {
			console.error(error);
		});
  }
  render() {
    // Extract values from movie object
    //const { name, image, url, key } = deal;
    const { params } = this.props.navigation.state;
    const deal = params.deal;
    var image;
    switch (deal.storeID["name"]) {
      case "Hummus Medames - חומוס מדאמס":
        image = require('../images/medames.jpg');
        break;
      case "Kan Kai":
        image = require('../images/kan_kai.jpg');
        break;
      default:
        break;
    }
    return (
      <View style={{ paddingVertical: 20 }}>
        <ScrollView>
        <Card title={deal.storeID["name"]} image={image}>

          <Text style={{ marginBottom: 30, textAlign:'right' }}>{deal.details}</Text>
          <Button style={{ marginBottom: 15}}
          backgroundColor="#03A9F4"
          title="הזמנת מבצע"
          />
          <Button
          backgroundColor="#03A9F4"
          title="ניווט"
          />
          <Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="מחק מבצע"
						onPress={() => this.deleteDeal(deal._id)}
					/>

        </Card>
        </ScrollView>
      </View>
    );
  }
}

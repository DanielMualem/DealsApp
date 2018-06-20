import React from "react";
import { ScrollView, Text, Linking, View, Image } from "react-native";
import { Card, Button } from "react-native-elements";

export default class DealDetails extends React.Component {

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

        </Card>
        </ScrollView>
      </View>
    );
  }
}

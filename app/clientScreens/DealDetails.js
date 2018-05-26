import React from "react";
import { ScrollView, Text, Linking, View, Image } from "react-native";
import { Card, Button } from "react-native-elements";

export default class DealDetails extends React.Component {

  render() {
    // Extract values from movie object
    //const { name, image, url, key } = deal;
    const { params } = this.props.navigation.state;
    const deal = params.deal;

    return (
      <View style={{ paddingVertical: 20 }}>
        <Card title={deal.storeName} image={deal.image}>

          <Text>{deal.details}</Text>

        </Card>
      </View>
    );
  }
}

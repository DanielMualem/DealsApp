import React, { Component } from 'react';
import {
  ImageBackground,
  Image,             // Renders background image
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles row presses
  View                // Container component
} from 'react-native';
import { Card, Button } from "react-native-elements";
import { StackNavigator, TabNavigator, SwitchNavigator } from "react-navigation";
//import Dimensions from 'Dimensions';

// Detect screen size to calculate row height
//const screen = Dimensions.get('window');

export default class DealRow extends Component {
  // Extract movie and onPress props passed from List component
    render({ deal, onPress } = this.props) {
      // Extract values from movie object
      const { storeID, preview, details, imgID } = deal;
      return (

        <Card title={`${storeID["name"]}`} image={require('../images/medames.jpg')} key={storeID["name"]}

        >
          <Text style={{ marginBottom: 15, textAlign:'center' }}>
            {preview}
          </Text>
          <Button
          backgroundColor="#03A9F4"
          title="פרטים"
          onPress={onPress}
          />
        </Card>
      );
    }
}

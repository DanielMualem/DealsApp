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
    const { storeName, preview, image, details } = deal;
    return (

      <Card title={`${storeName}`} image={image} key={storeName}

      >
        <Text style={{ marginBottom: 10 }}>
          {preview}
        </Text>
        <Button
        backgroundColor="#03A9F4"
        title="VIEW NOW"
        onPress={onPress}
        />
      </Card>
    );
  }
}

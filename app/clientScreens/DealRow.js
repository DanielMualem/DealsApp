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
      const { storeID, preview, details, imgID, path } = deal;
      var image;
      switch (`${storeID["name"]}`) {
        case "Hummus Medames - חומוס מדאמס":
          image = require('../images/medames.jpg');
          break;
        case "Kan Kai":
          image = require('../images/kan_kai.jpg');
          break;
        case "נוגטין - nugetin":
          image = require('../images/nugetin.jpg');
          break;
        case "שניצליין - Schnitzeline":
          image = require('../images/schnitzeline.png');
          break;
        case "בורגרס בר - burgers bar":
          image = require('../images/burgers-bar.png');
          break;
        default:
          break;
      }
      return (

        <Card title={`${storeID["name"]}`} image={image} key={storeID["name"]}

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

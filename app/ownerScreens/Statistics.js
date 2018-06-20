import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default class Statistics extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcome}>
          בעדכון הקרוב...
        </Text>
      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03A9F4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});

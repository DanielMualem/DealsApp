import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Statistics extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcome}>
          To be continued...
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
    backgroundColor: '#4F6D7A',
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

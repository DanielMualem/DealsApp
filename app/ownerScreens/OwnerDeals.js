import React, { Component } from 'react';
import {
  View,
  Image,
  ListView,       // Renders a list
  RefreshControl, // Refreshes the list on pull down
  Text,
  ScrollView,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Button } from "react-native-elements";
import ActionButton from 'react-native-action-button';
import DealRow from '../clientScreens/DealRow';
import DealDetailsOwner from './DealDetailsOwner';
import { onSignOut } from "../ownerAuth";


export default class AllDeals extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: "המבצעים שלי",
      headerRight: (
        <Button
        onPress={() => onSignOut().then(() => {
          fetch('https://dealsapp.online/storeOwner/logout');
          navigation.navigate("SignedOut");
        })}
        title = "התנתק"
        color = "#03A9F4"
        backgroundColor = "transparent"
        />
      ),
    };
  };

  /**
   * Store the data for ListView
   */
  state = {
    // ListView DataSource object
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    // Used for RefreshControl
    isRefreshing: false,
  }

  /**
   * Call _fetchData after component has been mounted
   */
  componentDidMount() {
    // Fetch Data
    this.fetchData();
  }

  /**
   * Prepare demo data for ListView component
   */
   fetchData_temp = () => {
    // Data is being refreshed
    this.setState({ isRefreshing: true });
    this.setState({
      // Fill up DataSource with demo data
      dataSource: this.state.dataSource.cloneWithRows(demoData),
      // Data has been refreshed by now
      isRefreshing: false,
    });
  }

  fetchData = () => {
    fetch('https://dealsapp.online/storeOwner/getDeals')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        //fetch('https://dealsapp.online/deals')
        this.setState({ isRefreshing: true });
        this.setState({
          // Fill up DataSource with demo data
          dataSource: this.state.dataSource.cloneWithRows(responseJson),
          // Data has been refreshed by now
          isRefreshing: false,
        });
        if (Object.keys(responseJson).length < 1) {
          Alert.alert("אין מבצעים כעת, רענן לעדכון");
        }
        //console.log(responseJson[0]["storeID"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * Render a row
   */
  renderRow = (deal) => {
    return (
      <DealRow
        // Pass movie object
        deal={deal}
        // Pass a function to handle row presses
        onPress={() => {
          // Navigate to a separate movie detail screen
            this.props.navigation.navigate('Deal', { deal: deal,});
        }}
      />
    );
  }

  /**
   * Renders the list
   */
  render() {
    return (


        <ListView

          // Data source from state
          dataSource={this.state.dataSource}
          // Row renderer method
          renderRow={this.renderRow}
          // Refresh the list on pull down
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={this.fetchData}
            />
          }
        />

    );
  }
}

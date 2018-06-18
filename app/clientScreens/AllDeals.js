import React, { Component } from 'react';
import {
  View,
  Image,
  ListView,       // Renders a list
  RefreshControl, // Refreshes the list on pull down
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Button } from "react-native-elements";
import ActionButton from 'react-native-action-button';
import DealRow from './DealRow';
import DealDetails from './DealDetails';
import { onSignOut } from "../auth";

const demoData = [
  {
    storeName: 'Humus Medames - חומוס מדאמס',
    preview: '1+1 על כל העסקיות',
    image: require('../images/medames.jpg'),
    details: "1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals ",
  },
  {
    storeName: 'Kan Kai - קאן קאי',
    preview: '20% הנחה על כל התפריט',
    image: require('../images/kan_kai.jpg'),
    details: "20% הנחה על כל התפריט!\\n בואו להנות ממגוון מנות של אוכל אסייתי.\n נודלס, סושי ועוד!",
  },
  {
    storeName: 'Deli Cream - דלי קרים',
    preview: 'כדור גלידה מתנה בקניית קרפ צרפתי',
    image: require('../images/deli_cream.jpg'),
    details: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
  {
    storeName: 'BBB',
    preview: '1+1 on all meals',
    image: require('../images/bbb.jpg'),
    details: "1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals ",
  },
  {
    storeName: 'Aroma',
    preview: '50% OFF everything',
    image: require('../images/aroma.jpg'),
    details: "bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla   ",
  },
  {
    storeName: 'Humus Medames',
    preview: '20% OFF meals',
    image: require('../images/medames.jpg'),
    details: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
  {
    storeName: 'Deli Cream',
    preview: '1+1 on all ice creams',
    image: require('../images/deli_cream.jpg'),
    details: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
];

export default class AllDeals extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: "מבצעים",
      headerRight: (
        <Button
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
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
   * Prepare data for ListView component
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
  getImage = () => {}

  fetchData = () => {
    fetch('https://dealsapp.online/deals')
      .then((response) => response.json())
      .then((responseJson) => {
        //fetch('https://dealsapp.online/deals')
        console.log("isRefreshing: true");

        this.setState({ isRefreshing: true });
        console.log("dataSource");
        this.setState({
          // Fill up DataSource with demo data
          dataSource: this.state.dataSource.cloneWithRows(responseJson),
          // Data has been refreshed by now
          isRefreshing: false,
        });
        console.log(this.state.isRefreshing);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
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
      <View >
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
      </View>
    );
  }
}


// app/router.js
import React, {Component} from 'react';
import { createStackNavigator, createTabNavigator, createSwitchNavigator } from "react-navigation";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "./auth";

import SignUp from "./clientScreens/SignUp";
import SignIn from "./clientScreens/SignIn";
import OwnerSignUp from "./ownerScreens/SignUp"
import OwnerSignIn from "./ownerScreens/SignIn"
import AddDeal from "./ownerScreens/AddDeal"
import DealRow from './clientScreens/DealRow';
import DealDetails from './clientScreens/DealDetails';
import AllDeals from './clientScreens/AllDeals';
import OwnerDeals from './ownerScreens/OwnerDeals';
import Statistics from './ownerScreens/Statistics';
import DealDetailsOwner from './ownerScreens/DealDetailsOwner';


export const createRootNavigator = (signedIn = false, ownerSignedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      },
      SignedInTabOwner: {
        screen: SignedInTabOwner
      },
    },
    {
      /*
      if(signedIn){
        x = "SignedIn"
      } else if (ownerSignedIn) {
        x = "SignedInTabOwner"
      } else {
        x = "SignedOut"
      }
      */
      //initialRouteName:x
      initialRouteName: signedIn ? "SignedIn" : ownerSignedIn ? "SignedInTabOwner" : "SignedOut"
      /*
      initialRouteName: {if (ownerSignedIn) { "SignedInTabOwner"}
      else if (signedIn) { "SignedIn"}
      else { "SignedOut"}}
      //initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      // initialRouteName: signedIn ? "SignedOut" : "SignedOut"
      */
    }
  );
};



export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "כניסה"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "הרשמה"
    }
  },
  OwnerSignIn: {
    screen: OwnerSignIn,
    navigationOptions: {
      title: "כניסה - בעל מסעדה"
    }
  },
  OwnerSignUp: {
    screen: OwnerSignUp,
    navigationOptions: {
      title: "הרשמה - בעל מסעדה"
    }
  }
});



export const SignedIn = createStackNavigator({
  Deals: {
    screen: AllDeals,
    navigationOptions: {
      title: "מבצעים",
    }
  },
  Deal: {
    screen: DealDetails,
    navigationOptions: {
      title: "פרטי מבצע"
    }
  },
});

export const AddDealStack = createStackNavigator({
  AddDeal: {
    screen: AddDeal,
    navigationOptions: {
      title: "הוסף מבצע"
    }
  }
});

export const StatisticsStack = createStackNavigator({
  Statistics: {
    screen: Statistics,
    navigationOptions: {
      title: "סטטיסטיקה"
    }
  }
});

export const OwnerSignedIn = createStackNavigator({
  Deals: {
    screen: OwnerDeals,
    navigationOptions: {
      title: " מבצעים",
    }
  },
  Deal: {
    screen: DealDetailsOwner,
    navigationOptions: {
      title: "פרטי מבצע"
    }
  }
});

export const SignedInTabOwner = createTabNavigator({
  OwnerDeals: {
    screen: OwnerSignedIn,
    navigationOptions: {
      title: "המבצעים שלי",
    }
  },
  AddDeal: {
    screen: AddDealStack,
    navigationOptions: {
      title: "הוספת מבצע"
    }
  },
  Statistics: {
    screen: StatisticsStack,
    navigationOptions: {
      title: "סטטיסטיקה"
    }
  },
  AllDeals: {
    screen: SignedIn,
    navigationOptions: {
      title: "כל המבצעים"
    }
  }
});


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
      title: "Sign In"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  OwnerSignIn: {
    screen: OwnerSignIn,
    navigationOptions: {
      title: "Owner Sign In"
    }
  },
  OwnerSignUp: {
    screen: OwnerSignUp,
    navigationOptions: {
      title: "Owner Sign Up"
    }
  }
});



export const SignedIn = createStackNavigator({
  Deals: {
    screen: AllDeals,
    navigationOptions: {
      title: "Deals",
    }
  },
  Deal: {
    screen: DealDetails,
    navigationOptions: {
      title: "Deal"
    }
  },
  AddDeal: {
    screen: AddDeal,
    navigationOptions: {
      title: "AddDeal"
    }
  }
});

export const OwnerSignedIn = createStackNavigator({
  Deals: {
    screen: OwnerDeals,
    navigationOptions: {
      title: "Deals",
    }
  },
  Deal: {
    screen: DealDetails,
    navigationOptions: {
      title: "Deal"
    }
  },
  AddDeal: {
    screen: AddDeal,
    navigationOptions: {
      title: "AddDeal"
    }
  }
});

export const SignedInTabOwner = createTabNavigator({
  OwnerDeals: {
    screen: OwnerSignedIn,
    navigationOptions: {
      title: "My Deals",
    }
  },
  Statistics: {
    screen: Statistics,
    navigationOptions: {
      title: "Statistics"
    }
  },
  AllDeals: {
    screen: SignedIn,
    navigationOptions: {
      title: "All Deals"
    }
  }
});


// app/router.js
import React, {Component} from 'react';
import { createStackNavigator, TabNavigator, createSwitchNavigator } from "react-navigation";
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


export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      // initialRouteName: signedIn ? "SignedOut" : "SignedOut"
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
/*
  OwnerSignUp: {
    screen: OwnerSignUp,
    navigationOptions: {
      title: "Owner Sign Up"
    }
  }
  */
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

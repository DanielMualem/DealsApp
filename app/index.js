
// app/index.js


import React from "react";
import { SignedOut, SignedIn, createRootNavigator, SignedInTabOwner } from "./router";

import { isSignedIn } from "./auth";
import { isOwnerSignedIn } from "./ownerAuth";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      ownerSignedIn: false,
      checkedOwnerSignIn: false
    };
  }

  componentDidMount() {
    //this._isMounted = true;
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred on isSignedIn function"));

      isOwnerSignedIn()
        .then(res => this.setState({ ownerSignedIn: res, checkedOwnerSignIn: true }))
        .catch(err => alert("An error occurred on checkedOwnerSignIn function"));
  }

  render() {
    const { checkedSignIn, signedIn, ownerSignedIn, checkedOwnerSignIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }
    if (!checkedOwnerSignIn) {
      return null;
    }


    const Layout = createRootNavigator(signedIn, ownerSignedIn);
    return <Layout />;


  }
}

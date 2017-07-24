import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWilMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyBDELGjc_q-xaUF8SnJ_WEiqi_JckXL0r0",
        authDomain: "auth-bd0e4.firebaseapp.com",
        databaseURL: "https://auth-bd0e4.firebaseio.com",
        projectId: "auth-bd0e4",
        storageBucket: "auth-bd0e4.appspot.com",
        messagingSenderId: "533648799315"
      })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

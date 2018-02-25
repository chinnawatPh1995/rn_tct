console.log('Component App');
import React, { Component } from 'react';
import { Text,Image, View } from 'react-native';
import Navbar from './components/Navbar';

import LoginPage from './components/page/LoginPage';
import firebase from 'firebase';

export default class App extends Component {
componentDidMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyBxZY7Dp3y0XfaItx1IZj-RHvUzRle-uoQ",
        authDomain: "rn-tct.firebaseapp.com",
        databaseURL: "https://rn-tct.firebaseio.com",
        projectId: "rn-tct",
        storageBucket: "rn-tct.appspot.com",
        messagingSenderId: "32316953834"
    });
}
  render() {
    return (
        <View>
            <View>
                <LoginPage/>
            </View>
        </View>
    );
  }
}

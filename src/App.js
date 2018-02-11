console.log('Component App');
import React, { Component } from 'react';
import { Text,Image, View } from 'react-native';
import Navbar from './components/Navbar';

import LoginPage from './components/page/LoginPage';

export default class App extends Component {
  render() {
    return (
        <View>
            <View>
                {/* <Navbar/> */}
                <LoginPage/>
            </View>
        </View>
    );
  }
}

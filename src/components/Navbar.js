console.log('Component Navbar');
import React, { Component } from 'react';
import {Text, View} from 'react-native';

class Navbar extends Component {
    render() {
        return(
            <Text style={{marginTop:20}}>
                Navigator Bar
            </Text>
        );
    }
}
export default Navbar;
import React, { Component } from 'react';
import { Text } from 'react-native';
import LoginFrom from '../forms/LoginFrom';

//const LoginPage = () => <Text>Login Page</Text> ไม่สน lift cycle

class LoginPage extends Component {
    render() {
        return (
           <LoginFrom/>
        );
    }
}
export default LoginPage;
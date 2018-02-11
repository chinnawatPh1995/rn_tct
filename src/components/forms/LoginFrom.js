import React, { Component } from 'react';
import {
    Text, View,
    TextInput, Button
} from 'react-native';

class LoginFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '',
        }; // Component ของใครของมัน
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange = (email) => {
        console.log(email);
        this.setState({email})

    }
    onSubmit = () => {
        console.log('OnSubmit', this.state);
    }
    render() {
        return (
            <View style= {{ padding: 10 }}>
                <Text>Login</Text>
                <TextInput
                    placeholder = 'Enter Username'
                    style = {{paddingTop: 5}}
                    onChangeText = {(email) => this.setState({email})}
                    value = {this.state.email}
                />
                <TextInput
                    placeholder = 'Enter Password'
                    style = {{paddingTop: 5}}
                    onChangeText = {(password) => this.setState({password})}
                    value = {this.state.password}
                    secureTextEntry
                />
                <Button
                    title = 'Login'
                    color = 'rgb(255, 131, 0)'
                    onPress = {this.onSubmit}
                />
            </View>
        );
    }
}
export default LoginFrom;
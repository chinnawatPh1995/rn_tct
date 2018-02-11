import React, { Component } from 'react';
import {
    Text, View,
    TextInput, Button
} from 'react-native';

import Validator from 'validator';

class LoginFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '',
            errors: {
                email: '',
                password: ''
            }
        }; // Component ของใครของมัน
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
    }
    onChange = (email) => {
        console.log(email);
        this.setState({email});
    }

    checkEmail = () => {
        console.log('Email', this.state.email);
        const { email } = this.state.errors;
        if(!Validator.isEmail(this.state.email))
            this.setState({});
        else
            this.setState({...this.state, errors: {email: '', password:''}});
    }

    checkPassword = () => {
        
    }

    onSubmit = () => {
        // console.log('OnSubmit', this.state);
        const {errors,password,email} = this.state
        if(
            errors.email == '' && errors.password == '' &&
            email !== '' && password ==''
        ){
            console.log('Go to API');
        }
        // console.log('OnSubmit', this.state);
    }

    render() {
        return (
            <View style= {{ padding: 10 }}>
                <Text>Login</Text>
                <TextInput
                    placeholder = 'Exemple@excemple.com'
                    style = {{paddingTop: 5}}
                    onChangeText = {(email) => this.setState({email : email.toLowerCase()})}
                    value = {this.state.email}
                    onBlur={this.checkEmail}
                />
                <Text style = {{color: 'red', paddingLeft: 5}}
                >{this.state.errors.email}</Text>
                <TextInput
                    placeholder = 'Enter Password'
                    style = {{paddingTop: 5}}
                    onChangeText = {(password) => this.setState({password})}
                    value = {this.state.password}
                    secureTextEntry
                    onBlur = {this.checkPassword}
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
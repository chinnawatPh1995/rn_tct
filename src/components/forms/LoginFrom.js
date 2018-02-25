import React, { Component } from 'react';
import {
    Text, View,
    TextInput, Button
} from 'react-native';

import Validator from 'validator';
import firebase from 'firebase';

class LoginFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'eamil@d.com',
            password: '',
            errors: {
                email: '',
                password: '',
                auth: '',
            },
            disabled : true,
            loading: false,
        }; // Component ของใครของมัน
        this.onSubmit = this.onSubmit.bind(this);
        // this.checkEmail = this.checkEmail.bind(this);
        // this.checkPassword = this.checkPassword.bind(this);
        this.validate = this.validate.bind(this);
        // เพราะว่า ถ้าเราไม่ bind เราจะไม่สามารถ this ไม่ได้ ทำให้มันผูกกัน
    }
    // checkEmail = () => {
    //     if(!Validator.isEmail(this.state.email))
    //     {
    //         // this.setState({
    //         //     errors : {
    //         //         email: 'The email must be a valid email'
    //         //     }
    //         // });
    //         // console.log('old=', this.state.errors);
    //         // const state = {...this.state.errors, email: 'Not email'};
    //         // console.log('new = ' , state);
    //         this.setState({ errors: {...this.state.errors, email: 'The email must be a valid email' } });
    //     }else{
    //         this.setState({errors : {...this.state.errors, email: ''}});
    //     }
    // }

    // checkPassword(){
    //     if (this.state.password.length < 7 ) {
    //         this.setState({ disabled: true});
    //         this.setState({ errors: {...this.state.errors, password: 'More than 8 charactor' } });
    //     } 
    //     else {
    //         this.setState({ disabled: false});
    //         this.setState({ errors: {...this.state.errors, password: '' } });
    //     }
    // //console.log(this.state);
    // }
    validate = (type,value) => {
        console.log(type,value);
        if(type == 'email')
        {
            this.setState({email: value})
            if(!Validator.isEmail(this.state.email))
            {
                this.setState({ errors: {...this.state.errors, email: 'The email must be a valid email' } });
            }else{
                this.setState({errors : {...this.state.errors, email: ''}});
            }
        }

        if(type == 'password')
        {
            this.setState({password: value})
            if (this.state.password.length < 7 ) {
                this.setState({ disabled: true});
                this.setState({ errors: {...this.state.errors, password: 'More than 8 charactor' } });
            } 
            else {
                this.setState({ disabled: false});
                this.setState({ errors: {...this.state.errors, password: '' } });
            }
        }
    }

    onSubmit = () => {
        console.log(this.state);
        const {errors,password,email} = this.state
        if( errors.email == '' && errors.password == '' &&
            email !== '' && password !== ''
        ){
            const {email,password} = this.state;
            firebase.auth().signInWithEmailAndPassword(email,password)
                .then(() => {
                    this.setState({
                            error: {...this.state.errors, auth: ''}
                        });
                    console.log('Hell Yeah !!!')
                    })
                .catch(() => {
                    firebase.auth().createUserWithEmailAndPassword(email,password)
                        .then(()=> {
                            this.setState({
                                error: {...this.state.errors, auth: ''}
                            });
                            this.setState({loading: false});
                        })
                        .catch(() => {
                            this.setState({
                                error: {...this.state.errors, auth: 'Authentication failed.'},
                                loading: false
                            });
                        })
                });
        }
    }

    render() {
        return (
            <View style= {{ padding: 10 }}>
                <Text>Login</Text>
                <TextInput
                    placeholder = 'Exemple@excemple.com'
                    style = {{paddingTop: 5}}
                    // onChangeText = {(email) => this.setState({email : email.toLowerCase()})}
                    onChangeText = {(text) => this.validate('email', text)}
                    value = {this.state.email}
                    onChange = {this.validate}
                    //onBlur={this.setFlag}
                />
                <Text style = {{color: 'red', paddingLeft: 5}}>{this.state.errors.email}</Text>
                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    // onChangeText={(password) => this.setState({password})}
                    onChangeText = {(text) => this.validate('password', text)}
                    value={this.state.password}
                    onChange={this.validate}
                />
                <Text style = {{color: 'red', paddingLeft: 5}}>{this.state.errors.password}</Text>
                <Button
                    disabled = {this.state.disabled}
                    title = 'Login'
                    color = 'rgb(255, 131, 0)'
                    onPress = {this.onSubmit}
                />
                <Text style = {{color: 'red', paddingLeft: 5}}>{this.state.errors.auth}</Text>
            </View>
        );
    }
}
export default LoginFrom;
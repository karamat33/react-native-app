import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputText from '../_components/inputText';
import CtaButton from '../_components/ctaButton';
import * as Colors from '../_constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { userActions } from '../_store/_actions';
import { validation } from '../_store/_helpers/validation';
import ErrorMessage from '../_components/errorMessage';
class LoginScreen extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      email: '',
      password: '',
      error: {
        email: '',
        password: ''
      }
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStep = this.changeStep.bind(this);
  }

  handleEmail = text => {
    const { error } = this.state;
    if (!validation.validateEmail(text)) {
      error.email = '*Invalid Email'
    } else {
      error.email = ''
    }
    this.setState({
        email: text, 
        error:{...this.state.error,...error}
        });
  };
  handlePassword = text => {
    const { error } = this.state;
    if (!validation.validatePassword(text)) {
      error.password = '*Your password must be at least 6 characters'
    } else {
      error.password=''
    }
    this.setState({
        password: text, 
        error:{...this.state.error,...error}
        });
  };

  handleSubmit(e) {
    e.preventDefault();
  
    const { email, password,  error } = this.state;
    if(validation.isEmpty(email)){
        error.email = '*Email is required'
    }
    if(validation.isEmpty(password)){
        error.password = '*Password is required'
    }
    this.setState({
        error:{...this.state.error,...error}
    })

    if (!error.email && !error.password) {
      this.props.login(email, password);
    }
  }

  changeStep(e) {
    e.preventDefault();
    this.props.changeStep(2);
  }

  render() {

    return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <InputText
            name='email'
            onChange={this.handleEmail}
            Title='Email Address*'
          />
          {!validation.isEmpty(this.state.error.email) && (
            <ErrorMessage error={this.state.error.email} />
          )}
        </View>

        <View style={styles.inputContainer}>
          <InputText
            value={this.state.password}
            name='password'
            onChange={this.handlePassword}
            Title='Password*'
          />
          {!validation.isEmpty(this.state.error.password) && (
            <ErrorMessage error={this.state.error.password} />
          )}
        </View>
        <View>
          <TouchableOpacity>
            <Text styles={styles.forgetPass}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.termsContainer}>
          <View style={styles.termsIcon}>
            <Icon
              name='ios-information-circle-outline'
              size={20}
              color={Colors.BLACK}
            />
          </View>
          <View>
            <Text style={styles.termsText}>
              By creating an account, you agree to our Terms and Conditions &
              Privacy Policy
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CtaButton
            BtnContainer={styles.btnContainer_1}
            BtnText={styles.btnText_1}
            Title='Log In'
            onPress={this.handleSubmit}
          />
          <CtaButton
            onPress={this.changeStep}
            BtnContainer={styles.btnContainer_2}
            BtnText={styles.btnText_2}
            Title='Create Account'
          />
        </View>
      </View>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  const { message } =state.alert
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapState, actionCreators)(LoginScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10
  },
  inputContainer: {
    marginBottom: 12
  },
  forgetPass: {
    marginTop: 15,
    textDecorationLine: 'underline',
    fontSize: 13
  },
  termsContainer: {
    marginTop: 15,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  termsIcon: {
    marginRight: 10
  },
  termsText: {
    fontSize: 10,
    color: Colors.DARKGRAY
  },
  btnContainer_1: {
    marginTop: 15,
    backgroundColor: Colors.BLACK
  },
  btnText_1: {
    color: Colors.WHITE
  },
  btnContainer_2: {
    marginTop: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 0.5,
    borderColor: Colors.BLACK
  },
  btnText_2: {
    color: Colors.BLACK
  }
});

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputText from '../_components/inputText';
import CtaButton from '../_components/ctaButton';
import * as Colors from '../_constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { userActions } from '../_store/_actions';
import { validation } from '../_store/_helpers/validation';
import ErrorMessage from '../_components/errorMessage';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fullName: '',
        email: '',
        password: ''
      },
      error: {
        fullName:'',
        email: '',
        password: ''
      }
    };

    this.handlefullName = this.handlefullName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStep = this.changeStep.bind(this);
  }

  handlefullName = text => {
    const { user, error } = this.state;
    if(validation.isEmpty(user.fullName)){
        error.fullName = '*FullName is required'
    }else{
        error.fullName = ''
    }
    user.fullName= text 
    this.setState({
        user:{...this.state.user,...user},
        error:{...this.state.error,...error}
        });
  };

  handleEmail = text => {
    const { user, error } = this.state;
    if (!validation.validateEmail(text)) {
      error.email = '*Invalid Email'
    } else {
      error.email = ''
    }
    user.email= text 
    this.setState({
        user:{...this.state.user,...user},
        error:{...this.state.error,...error}
        });
  };
  handlePassword = text => {
    const { user, error } = this.state;
    if (!validation.validatePassword(text)) {
      error.password = '*Your password must be at least 6 characters'
    } else {
      error.password=''
    }
    user.password= text 
    this.setState({
        user:{...this.state.user,...user},
        error:{...this.state.error,...error}
        });
  };

  handleSubmit(e) {
    const { user, error } = this.state;
    if(validation.isEmpty(user.fullName)){
        error.fullName = '*FullName is required'
    }
    if(validation.isEmpty(user.email)){
        error.email = '*Email is required'
    }
    if(validation.isEmpty(user.password)){
        error.password = '*Password is required'
    }
    this.setState({
        error:{...this.state.error,...error}
    })

    if (!error.fullName && !error.email && !error.password) {
      this.props.register(user);
    }
  }
  changeStep(e) {
    e.preventDefault();
    this.props.changeStep(1);
  }

  render() {
    const { registering, message } = this.props;
    console.log(registering);
    console.log(message);
    return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <InputText name='name' onChange={this.handlefullName} Title='Name*' />
          {!validation.isEmpty(this.state.error.fullName) && (
            <ErrorMessage error={this.state.error.fullName} />
          )}
        </View>
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
            name='password'
            onChange={this.handlePassword}
            Title='Password*'
          />
           {!validation.isEmpty(this.state.error.password) && (
            <ErrorMessage error={this.state.error.password} />
          )}
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
            Title='Register'
            onPress={this.handleSubmit}
          />
          <CtaButton
            onPress={this.changeStep}
            BtnContainer={styles.btnContainer_2}
            BtnText={styles.btnText_2}
            Title='Already have an account? Log in'
          />
        </View>
      </View>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  const { message } = state.alert
  return { registering, message };
}

const actionCreators = {
  register: userActions.register
};

export default connect(mapState, actionCreators)(RegisterScreen);

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

import React, { Component } from "react";
import LoginScreen from "./LoginModal";
import RegisterScreen from "./RegisterModal";



class AuthenticationScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1
        };
  
    }
    changeStep = (step) =>{
        this.setState({step:step})
    }

    render() {
        const { step } = this.state;
        switch (step) {
          case 1:
            return (
             <LoginScreen changeStep={this.changeStep} name="karam" />
            );
          case 2:
            return (
             <RegisterScreen changeStep={this.changeStep}/>
            );
        }
      }
    
}
export default AuthenticationScreen


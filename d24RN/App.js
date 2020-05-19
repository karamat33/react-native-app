import React, { Component } from 'react';
import TabsBarMainNavigator from './_navigation/MainNavigation';
import { appInitActions } from './_store/_actions';
import { connect } from 'react-redux';
class App extends Component {

  componentDidMount() {
   
    this.props.initApp();
  }

  render() {
    const { guestKey } = this.props;
    console.log(guestKey)
    return (
     <TabsBarMainNavigator/>
    );
  }
}

const mapStateToProps = state => {
  return {
    guestKey: state.appInit.guestKey,
  };
};

const mapDispatchToProps = {
  initApp : appInitActions.getAppInit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

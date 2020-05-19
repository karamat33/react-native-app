import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Colors from '../_constants/colors';

let seperator = '';

export default Seperator = props => {
  seperator = props.Seperator;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{seperator.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: seperator.height ? seperator.height : 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: seperator.titleFontSize ? seperator.titleFontSize : 20,
    fontStyle: seperator.titleFontStyle ? seperator.titleFontSize : 'normal',
    color: seperator.titleColor ? seperator.titleColor : Colors.BLACK,
    fontWeight: 'bold',
    backgroundColor: seperator.backgroundColor
      ? seperator.backgroundColor
      : 'transparent'
  }
});

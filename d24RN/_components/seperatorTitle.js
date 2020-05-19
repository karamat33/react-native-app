import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Colors from '../_constants/colors';

let seperatorTitle = '';

export default SeperatorTitle = props => {
  seperatorTitle = props.SeperatorTitle;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{seperatorTitle.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: seperatorTitle.height ? seperatorTitle.height : 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: seperatorTitle.backgroundColor
      ? seperatorTitle.backgroundColor
      : 'transparent'
  },
  text: {
    fontSize: seperatorTitle.titleFontSize ? seperatorTitle.titleFontSize : 20,
    fontStyle: seperatorTitle.titleFontStyle
      ? seperatorTitle.titleFontSize
      : 'normal',
    color: seperatorTitle.titleColor ? seperatorTitle.titleColor : Colors.BLACK,
    fontWeight: 'bold'
  }
});

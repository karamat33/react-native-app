import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Colors from '../_constants/colors';

export default GraySeperator = () => {
  return <View style={styles.seperator}></View>;
};

const styles = StyleSheet.create({
  seperator: {
    flex: 1,
    height: 20,
    backgroundColor: Colors.LIGHTGRAY
  }
});

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Colors from '../_constants/colors';

export default QuickSearchItem = props => {
  return (
    <View style={styles.item}>
      <Text>{props.item.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.LIGHTGRAY,
    width: 150,
    height: 60,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

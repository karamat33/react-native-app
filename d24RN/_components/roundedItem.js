import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Colors from '../_constants/colors';

export default RoundedItem = props => {
  return (
    <View style={[styles.item,{width:props.width,backgroundColor:props.backgroundColor,borderWidth:props.borderWidth,borderColor:props.borderColor}]}>
      <Text>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    height: 40,
    margin: 5,
    color:Colors.BLACK,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

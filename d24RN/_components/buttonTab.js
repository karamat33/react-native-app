import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as Colors from '../_constants/colors';

export default ButtonTab = props => {
  return (
    <View style={[styles.btn, props.BtnContainer]}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Country')} style={styles.touchableContainer}>
        <View>
          <Text style={[styles.text, props.BtnText]}>{props.Title}</Text>
        </View>
        <View style={styles.icon}>
          <Icon name='chevron-right' size={20} color={Colors.BLACK} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.LIGHTGRAY
  }
});

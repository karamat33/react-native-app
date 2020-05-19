import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default CtaButton = props => {
  const handlePress = () => false;
  return (
    <View style={[styles.btn, props.BtnContainer]}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={[styles.text, props.BtnText]}>{props.Title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    textAlign: "center"
  }
});

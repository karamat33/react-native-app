import React from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Linking
} from "react-native";
import CtaButton from "../_components/ctaButton";
import * as Colors from "../_constants/colors";
import GraySeperator from "../_components/graySeparator";
import ButtonTab from "../_components/buttonTab";

const SettingsScreen = props => {
  const { navigate } = props.navigation;
  return (
    <ScrollView style={styles.screen}>
      <View>
        <View style={styles.strContainer}>
          <Text style={styles.str1}>
            We constantly learn and adapt to your preferences. Log in so you can
            have a tailord experience based on your unique style.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <CtaButton
            BtnContainer={styles.btnContainer_1}
            BtnText={styles.btnText_1}
            Title="Create Account"
          />
          <CtaButton
            BtnContainer={styles.btnContainer_2}
            BtnText={styles.btnText_2}
            Title="Log in"
            onPress={() => navigate("Authentication")}
          />
        </View>
        <GraySeperator />

        <View>
          <ButtonTab Title="Become a supplier" />
          <ButtonTab Title="Free rentals" />
          <ButtonTab Title="Book an appointment" />
          <ButtonTab navigation={props.navigation} Title="Change country" />
        </View>
        <GraySeperator />
        <View>
          <ButtonTab Title="Support" />
          <ButtonTab Title="Rate" />
          <ButtonTab Title="Share" />
        </View>
        <GraySeperator />
        <View>
          <ButtonTab Title="About Designer-24" />
          <ButtonTab Title="Terms & conditions" />
          <ButtonTab Title="Privacy policy" />
          <ButtonTab Title="FAQs" />
        </View>
        <Button
          onPress={() =>
            this.showAlert(
              "test",
              "test",
              "ok",
              "cancel",
              1,
              "https://www.google.com",
              props.navigation
            )
          }
          title="Alert"
        />
        <Button
          onPress={() =>
            this.showAlert(
              "test",
              "test",
              "ok",
              "cancel",
              2,
              "",
              props.navigation,
              "Login"
            )
          }
          title="Alert"
        />
      </View>
    </ScrollView>
  );
};

showAlert = (
  title = "",
  message = "",
  btn1 = "",
  btn2 = "",
  action = "",
  link = "",
  navigation = "",
  page = ""
) => {
  Alert.alert(title, message, [
    {
      text: btn2,
      onPress: () => console.log("Cancel Pressed")
    },
    {
      text: btn1,
      onPress: () => {
        switch (action) {
          case 1:
            Linking.openURL(link);
            break;
          case 2:
            navigation.navigate(page);
            break;
        }
      }
    }
  ]);
};

SettingsScreen.navigationOptions = {
  title: "Account"
};

const styles = StyleSheet.create({
  strContainer: {
    padding: 10
  },
  str1: {
    textAlign: "center"
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12
  },
  btnContainer_1: {
    marginRight: 10,
    width: 150,
    backgroundColor: Colors.LIGHTGRAY
  },
  btnText_1: {
    color: Colors.BLACK
  },
  btnContainer_2: {
    marginRight: 10,
    width: 150,
    backgroundColor: Colors.BLACK
  },
  btnText_2: {
    color: Colors.WHITE
  }
});

export default SettingsScreen;

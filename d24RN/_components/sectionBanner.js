import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { CDN_URL } from '../_constants/app';
import * as Colors from '../_constants/colors';

let sectionBanner = '';

export default SectionBanner = props => {
  sectionBanner = props.SectionBanner;
  const imageUrl = CDN_URL + sectionBanner.appearanceData.image;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: imageUrl }}
      >
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>
            {sectionBanner.appearanceData.title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    maxHeight: '100%',
    backgroundColor: 'red'
  },
  bannerContainer: {
    paddingHorizontal: '10%'
  },
  bannerText: {
    fontWeight: 'bold',
    color: Colors.BLACK,
    textAlign: 'left'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
});

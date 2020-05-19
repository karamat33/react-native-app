import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { CDN_URL } from '../_constants/app';

export default MainBanner = props => {
  const imageUrl = CDN_URL + props.ImageUrl;
  const title = props.Title;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: imageUrl }}
      >
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    maxHeight: '100%'
  },
  bannerContainer: {
    paddingHorizontal: '10%'
  },
  bannerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

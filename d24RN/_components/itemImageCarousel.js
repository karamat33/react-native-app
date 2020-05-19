import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { CDN_CATALOG_URL } from '../_constants/app';

export default SlideShow = props => {
  let images = props.photos;
  let imagesArr = [];
  images.map((image, i) =>
    imagesArr.push(CDN_CATALOG_URL + image.path + '.' + image.extension)
  );
  return (
    <View stlye={styles.container}>
      <SliderBox parentWidth={160} images={imagesArr} 
      onCurrentImagePressed={index =>
        props.navigation.navigate('Details',{
          itemSKU: props.itemSKU
        })
    }
      />
    </View>
  );
};

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});

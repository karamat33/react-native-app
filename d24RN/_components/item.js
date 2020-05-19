import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CDN_CATALOG_URL } from '../_constants/app';

export default Item = props => {
  const imageUrl = CDN_CATALOG_URL + props.item.image;
  return (
    <View style={styles.item}>

    <TouchableOpacity style={styles.imageContainer}>
      <View >
        <Image style={styles.itemImage} source={{ uri: imageUrl }}></Image>
      </View>
      </TouchableOpacity>
      <Text>{props.item.name}</Text>
      <Text>
        {props.item.threeDayPrice} {props.item.retailPrice}
      </Text>
      <Text>Size:{props.item.sizes.map((item, key) => item + ' ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    width: 160,
    margin: 10
  },
  imageContainer: {
    height: 250,
    width: '100%'
  },
  itemImage: {
    height: '100%',
    width: '100%'
  }
});

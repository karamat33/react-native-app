import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Slideshow from './itemImageCarousel';


export default ListingItem = props => {
 

  addToCart = () => {
    props.addItemsToCart(props.item)
}

addToFavorite = () => {
  props.addItemsToFavorite(props.item)
}

  return (
    <View style={styles.item}>
     
      <View style={styles.imageContainer}>

        
        <Slideshow
          style={styles.itemImage}
          photos={props.item.allImages}
          navigation={props.navigation}
          itemSKU = {props.item.SKU}
        ></Slideshow>
   
      </View>
    
      
      <Text>{props.item.DesignerName}</Text>   
      <Text>
        {props.item.threeDayPrice} {props.item.retailPrice}
      </Text>
      <Text>Size:{props.item.sizes.map((item, key) => item + ' ')}</Text>
      <TouchableOpacity onPress={this.addToCart} style={styles.addBtn}>
                    <Text style={styles.text}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.addToFavorite} style={styles.addBtn}>
                    <Text style={styles.text}>Add to Favorite</Text>
                </TouchableOpacity>
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

import React from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import Item from './item';
import QuickSearchItem from './quickSearchItem';

export default ItemsCarousel = props => {
  return (
    <View>
      <View style={props.style}>
        <FlatList
          horizontal={true}
          data={props.Items}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <props.Tag item={item} index={index}></props.Tag>;
          }}
        ></FlatList>
      </View>
    </View>
  );
};

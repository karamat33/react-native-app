import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    FlatList,
  StyleSheet,
  ScrollView
} from 'react-native';
import ListingItem from '../_components/listingItem';
class FavoritesScreen extends Component {  
  render() {
    const { favoriteItems, navigation} = this.props;
    return (

      <FlatList
        // Data
        vertical
        numColumns={2}
        data={favoriteItems}
        // Render Items
        renderItem={({ item, index }) => (
          <ListingItem navigation={this.props.navigation} item={item} index={index}  product={item}></ListingItem>
        )}
        // Item Key
        keyExtractor={(item, index) => String(index)}
      />

     /* <View style={styles.container}>
                
                   
                    <View style={styles.ckitems}>
                    <FlatList 
                  data={favoriteItems}
                        renderItem={({item, index}) => <FavoriteItem item={item} index={index} />}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> }
                    /> 
                    </View>
                   
       </View>*/
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const mapStateToProps = (state) => ({
  favoriteItems: state.favoriteList.favorite,
});
export default connect(
  mapStateToProps
)(FavoritesScreen);
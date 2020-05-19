import React, { Component } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { getListingData, addToCart, addToFavorite } from '../_store/_actions/index';
import { connect } from 'react-redux';
import ListingItem from '../_components/listingItem';
import Cart from '../_components/cart';

class ListingScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Listing',
      headerRight: <Cart navigation={navigation}/>
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      documentData: [],
      pageSize: 10,
      startIndex: 0,
      isloading: false,
      refreshing: false
    };
  }

  componentWillMount = () => {
    this.retrieveData();
  }
 

  // Retrieve Data
  retrieveData = async () => {
    try {
      // Set State: Loading
      this.setState({
        isloading: true
      });
      console.log('Retrieving Data');
      await this.props.getListingData(
        this.state.startIndex,
        this.state.pageSize
      );
      let startIndex = this.state.startIndex + 10;
      // Set State
      this.setState({
        documentData: this.props.listingData.products,
        startIndex: startIndex,
        isloading: false
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Retrieve More
  retrieveMore = async () => {
    try {
      // Set State: Refreshing
      this.setState({
        refreshing: true
      });
      console.log('Retrieving additional Data');
      await this.props.getListingData(
        this.state.startIndex,
        this.state.pageSize
      );
      let startIndex = this.state.startIndex + 10;
      // Set State
      this.setState({
        documentData: [
          ...this.state.documentData,
          ...this.props.listingData.products
        ],
        startIndex: startIndex,
        refreshing: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Render Footer
  renderFooter = () => {
    try {
      // Check If Loading
      if (this.state.isloading) {
        return <ActivityIndicator size='large' style={{ color: '#000' }} />;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  addItemsToCart = (product) => {
    this.props.addToCart(product);
}
addItemsToFavorite = (product) => {
  this.props.addToFavorite(product);
}

  render() {
    const { loading } = this.props;
    if (loading && this.state.documentData == 0) {
      return (
        <View style={styles.screen}>
          <ActivityIndicator size='large' />
        </View>
      );
    }

    return (
      <FlatList
        // Data
        vertical
        numColumns={2}
        data={this.state.documentData}
        // Render Items
        renderItem={({ item, index }) => (
          <ListingItem navigation={this.props.navigation} item={item} index={index} addItemsToFavorite={this.addItemsToFavorite} addItemsToCart={this.addItemsToCart} product={item}></ListingItem>
        )}
        // Item Key
        keyExtractor={(item, index) => String(index)}
        ListFooterComponent={this.renderFooter}
        // On End Reached (Takes a function)
        onEndReached={this.retrieveMore}
        // How Close To The End Of List Until Next Data Request Is Made
        onEndReachedThreshold={0.5}
        // Refreshing (Set To True When End Reached)
        refreshing={this.state.refreshing}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemsContainer: {
    height: 320
  }
});

const mapStateToProps = state => {
  return {
    listingData: state.listingData.listingData,
    loading: state.listingData.loading
  };
};

const mapDispatchToProps = {
  getListingData,
  addToCart,
  addToFavorite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingScreen);

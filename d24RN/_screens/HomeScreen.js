import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { getHomeData } from '../_store/_actions/index';
import { connect } from 'react-redux';
import MainBannerImage from '../_components/mainBanner';
import SeperatorTitle from '../_components/seperatorTitle';
import Seperator from '../_components/seperator';
import SectioBanner from '../_components/sectionBanner';
import ItemsCarousel from '../_components/itemsCarousel';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Designer-24'
  };

  componentDidMount() {
   
    this.props.getHomeData();
  }

  render() {
    const { homeData, loading } = this.props;
    console.log(homeData)
    if (loading) {
      return (
        <View style={styles.screen}>
          <ActivityIndicator size='large' />
        </View>
      );
    }

    return (
      <ScrollView>
        <View>
          <View>
            <MainBannerImage
              Title={homeData.mainBanners[0].appearanceData.title}
              ImageUrl={homeData.mainBanners[0].appearanceData.image}
            />
          </View>
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <SeperatorTitle SeperatorTitle={homeData.seperatorBanners[1]} />
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <SectioBanner SectionBanner={homeData.bigBanners[0]} />
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <SectioBanner SectionBanner={homeData.bigBanners[1]} />
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <SectioBanner SectionBanner={homeData.bigBanners[2]} />
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <SeperatorTitle SeperatorTitle={homeData.seperatorBanners[2]} />
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <ItemsCarousel
            Tag={Item}
            style={styles.itemContainer}
            Items={homeData.collectionBanners[0].products}
          />
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <SeperatorTitle SeperatorTitle={homeData.seperatorBanners[3]} />
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <ItemsCarousel
            Tag={QuickSearchItem}
            style={styles.quickSearchItem}
            Items={homeData.tileBanners[0].tiles}
          />
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <SeperatorTitle SeperatorTitle={homeData.seperatorBanners[4]} />
          <Seperator Seperator={homeData.seperatorBanners[5]} />
          <ItemsCarousel
            Tag={Item}
            style={styles.itemContainer}
            Items={homeData.collectionBanners[1].products}
          />
        </View>
      </ScrollView>
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
    homeData: state.homeData.homeData,
    loading: state.homeData.loading
  };
};

const mapDispatchToProps = {
  getHomeData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

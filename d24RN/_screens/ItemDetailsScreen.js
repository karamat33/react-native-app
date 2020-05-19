import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { getProductData } from '../_store/_actions/index';
import { connect } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';
import { CDN_CATALOG_URL } from '../_constants/app';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Colors from '../_constants/colors'
import RadioButtons from '../_components/radioButton'
import RadioSquareButtons from '../_components/radioSquareButton'
import Calendar from '../_components/calendarPicker';
import Dialog from '../_components/dialog';
import CtaButton from "../_components/ctaButton";

const MIN_HEIGHT = 0;
const MAX_HEIGHT = 500;

const RENT_NOW_KEY = 1;
const TRY_AT_HOME_KEY = 2;
const BOOK_APPOINTMENT_KEY = 3;

class ItemDetailsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      rentalOptionKey: null,
      rentalOptionValue: null,
      sizeKey: null,
      sizeValue: null,
    };
  }

  setSelectedStartDate = (selectedStartDate) => {
    this.setState({ selectedStartDate: selectedStartDate })
  }

  setRentalOption = (rentalOptionKey, rentalOptionValue) => {
    this.setState({ rentalOptionKey: rentalOptionKey, rentalOptionValue: rentalOptionValue })
  }

  setSize = (sizeKey, sizeValue) => {
    this.setState({ sizeKey: sizeKey, sizeValue: sizeValue })
  }

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      headerTitle: state.params.headerTitle,
    };
  };

  ChangeOptions = (titleText = '') => {
    const { setParams } = this.props.navigation;
    setParams({ headerTitle: titleText })
  }

  handleDialog = () => {
    // Access the handleToggle function of the drawer reference
    this.refs.handleDialog.handleDialog();
  }

  componentDidMount() {
    this.props.getProductData(2, this.props.navigation.getParam('itemSKU'), 'items');
  }


  render() {

    const { productData, loading } = this.props;
    if (!productData.length && loading) {
      return (
        <View style={styles.screen}>
          <ActivityIndicator size='large' />
        </View>
      );
    }

    const rentalOptionsArr = []
    const sizesArr = []
    const imagesArr = [];

    const experiencesArr = [

      {
        key: RENT_NOW_KEY,
        text: 'Rent now'
      },
    ]

    productData[0].dressGroup.tryAtHome == true ? experiencesArr.push({
      key: TRY_AT_HOME_KEY,
      text: 'Try it home for free'
    }) : '';

    experiencesArr.push({
      key: BOOK_APPOINTMENT_KEY,
      text: 'Book a showroom appoitment'
    });

    productData[0].dressGroup.rentalOptions.map((item, key) =>
      rentalOptionsArr.push(
        {
          key: item.price,
          value: item.days,
          label: item.days + ' Days'
        }));

    productData[0].dressGroup.sizeIds.map((item, key) =>
      sizesArr.push(
        {
          key: item,
          value: item,
          label: productData[0].dressGroup.sizes[key],
        }));

    productData[0].dressGroup.allImages.map((image, i) =>
      imagesArr.push(CDN_CATALOG_URL + image.path + '.' + image.extension)
    );

    return (

      <View style={{ flex: 1 }}>

        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0}
          minOverlayOpacity={0}
          disableHeaderGrow={true}
          useNativeDriver={true}
          renderForeground={() => (
            <View style={styles.imageSlider}>
              <SliderBox
                dotColor={Colors.BLACK}
                inactiveDotColor={Colors.DARKGRAY}
                sliderBoxHeight={500}
                images={imagesArr} /></View>
          )}

        >
          <TriggeringView
            onHide={() => this.ChangeOptions(
              <View>
                <Text style={styles.headerDesignerName}>{productData[0].dressGroup.DesignerName}</Text>
                <Text style={styles.headerPrice}>
                  <Text >${productData[0].dressGroup.threeDayPrice}</Text>
                  <Text > ${productData[0].dressGroup.retailPrice} Retail</Text>
                </Text>
              </View>, false)

            }
            onDisplay={() => this.ChangeOptions()}
          >

          </TriggeringView>

          <View style={styles.content}>

            <Dialog ref="handleDialog" />

            <View style={[styles.mainSection, styles.mgt30]}>

              <View style={styles.subSection1}>
                <Text style={styles.title}>{productData[0].dressGroup.DesignerName}</Text>
                <Text style={styles.description}>{productData[0].dressGroup.description}</Text>
                <Text>
                  <Text style={styles.blackText}>${productData[0].dressGroup.threeDayPrice}</Text>
                  <Text style={styles.grayText}> ${productData[0].dressGroup.retailPrice} Retail</Text>
                </Text>
              </View>

              <View style={styles.subSection2}>

                <Image style={styles.btnImage} source={require('../assets/icons/like.png')} />
                <Image style={styles.btnImage} source={require('../assets/icons/like.png')} />
              </View>

            </View>


            <View style={[styles.mainSection, styles.mgt30]}>

              <View style={styles.subSection1}>
                <Text style={styles.title}> SIZE</Text>

                <View style={styles.subSection3}>
                  <RadioSquareButtons getSelectedValue={this.setSize} width={50} options={sizesArr} />
                </View>


              </View>

              <View style={styles.subSection2}>
                <Text style={styles.grayText}>Size Chart</Text>
              </View>

            </View>



            <View style={[styles.mainSection, styles.mgt30]}>

              <View style={styles.subSection1}>
                <Text style={styles.title}>EXPERIENCE</Text>

                <View style={[styles.subSection3, styles.mgt15]}>

                  <View style={styles.container}>
                    <RadioButtons options={experiencesArr} />
                  </View>
                </View>


              </View>

              <View style={styles.subSection2}>
                <TouchableOpacity onPress={() => this.handleDialog()}><Text style={styles.grayText}>More Info</Text></TouchableOpacity>
              </View>

            </View>

            <View style={[styles.mainSection, styles.mgt30]}>

              <View style={styles.subSection1}>
                <Text style={styles.title}>RENTAL DATES</Text>

                <View style={styles.subSection3}>
                  <RadioSquareButtons getSelectedValue={this.setRentalOption} width={80} options={rentalOptionsArr} />
                </View>


              </View>


            </View>

            <View style={[styles.mainSection, styles.mgt30]}>




              <View>
                <Calendar maxRangeDuration={this.state.rentalOptionValue} getSelectedStartDate={this.setSelectedStartDate} />
                <View><Text style={[styles.blackText, styles.price]}>{'Price: $' + this.state.rentalOptionKey}</Text></View>
              </View>




            </View>

            <View style={[styles.mainSection, styles.mgt30, styles.justifyContentCenter]}>
              <CtaButton
                BtnContainer={styles.btnContainer_2}
                BtnText={styles.btnText_2}
                Title="Add to cart"
              />


            </View>


          </View>


        </HeaderImageScrollView>
      </View>


    );
  }
}

const mapStateToProps = state => {
  return {
    productData: state.productData.productData,
    loading: state.productData.loading
  };
};

const mapDispatchToProps = {
  getProductData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailsScreen);

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerDesignerName: {
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: Colors.BLACK
  },
  headerPrice: {
    fontFamily: 'Avenir',
    color: Colors.BLACK,
    textAlign: 'center'
  },

  imageSlider: {
    backgroundColor: 'white',
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  content: {
    padding: 15,
  },
  mainSection: {
    flex: 1,
    flexDirection: 'row',
  },
  subSection1: {
    flex: 0.8,
  },
  subSection2: {
    flexDirection: 'row',
    flex: 0.2,
    justifyContent: 'flex-end'
  },
  mgt30: {
    marginTop: 30
  },
  mgt15: {
    marginTop: 15,
  },
  btnImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: Colors.BLACK
  },
  description: {
    fontFamily: 'Avenir',
    color: Colors.BLACK
  },
  blackText: {
    fontFamily: 'Avenir',
    color: Colors.BLACK
  },
  grayText: {
    fontFamily: 'Avenir',
    color: Colors.DARKGRAY
  },

  subSection3: {
    flexDirection: 'row'
  },
  price: {
    fontSize: 20,
  },
  btnContainer_2: {
    marginRight: 10,
    width: '100%',
    backgroundColor: Colors.BLACK
  },
  btnText_2: {
    color: Colors.WHITE,
    fontWeight:'bold',
    fontSize:18,
    fontFamily:'Avenir'
  },
  justifyContentCenter:{
    justifyContent:'center',
    alignItems:'center'
  }


});
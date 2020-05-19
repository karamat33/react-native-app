import React from 'react'; 
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../_screens/HomeScreen';
import ListingScreen from '../_screens/ListingScreen';
import ItemDetailsScreen from '../_screens/ItemDetailsScreen';
import FavoritesScreen from '../_screens/FavoritesScreen';
import SettingsScreen from '../_screens/SettingsScreen';
import AuthenticationScreen from '../_screens/AuthenticationModal';
import CountryScreen from '../_screens/CountryScreen';
import CartScreen from '../_screens/CartScreen';
import * as Colors from '../_constants/colors';

const HeaderMainNavigation = createStackNavigator(
    {
        Home: HomeScreen,
        Browse: ListingScreen,
        Details: ItemDetailsScreen,
        Settings: SettingsScreen,
    },
    { headerLayoutPreset: 'center' }
);


const ListingNavigation = createStackNavigator(
    {
        Browse: ListingScreen,
        Cart: CartScreen,
        Details: {
            
            screen:ItemDetailsScreen,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon style={{ marginLeft: 5 }} name={'chevron-left'}
                    size={40}
                    onPress={() => { navigation.goBack() }} />,
                    headerRight: <View style={{width:25,height:25}}><Image style={{flex:1, resizeMode:'contain', width: undefined, height: undefined, marginRight: 10}} source={require('../assets/icons/shopping-bag.png')}/></View>,
                tabBarVisible: false,
                headerStyle: {
                    borderBottomWidth: 0,
                    shadowOpacity:0,
                    elevation: 0,
                },
            })
        }
    },
    
    
    
    { headerLayoutPreset: 'center' }
);





const SettingsNavigation = createStackNavigator(
    {
        Settings: SettingsScreen,
        Country: {
            
            screen:CountryScreen,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon style={{ marginLeft: 5 }} name={'chevron-left'}
                    size={30}
                    onPress={() => { navigation.goBack() }} />,
                    headerRight: <Image style={{width: 15, height: 15, marginRight: 10}} source={require('../assets/icons/shopping-bag.png')}/>,
                tabBarVisible: false,
                headerStyle: {
                    borderBottomWidth: 0,
                    shadowOpacity:0,
                    elevation: 0
                },
            })
            
        },
        Authentication: {
            screen: AuthenticationScreen,

            navigationOptions: ({ navigation }) => ({
                title: 'Login',
                headerLeft: <Icon style={{ marginLeft: 5 }} name={'close'}
                    size={30}
                    onPress={() => { navigation.goBack() }} />,
                tabBarVisible: false,
                headerStyle: {
                    borderBottomWidth: 0,
                    shadowOpacity:0,
                    elevation: 0
                },
            })
        },
    },

    {
        mode: 'modal',
        headerLayoutPreset: 'center'
    }

);



const TabsBarMainNavigator = createBottomTabNavigator(
    
    {
    
    Home: HeaderMainNavigation,
    Browse: ListingNavigation,
    Favorites: FavoritesScreen,
    Settings: SettingsNavigation,
},{
    tabBarOptions: {
        activeTintColor: Colors.BLACK ,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          alignItems:'center',
          justifyContent:'center',
          color:Colors.DARKGRAY,
          paddingBottom:15
        },
      }

});

export default createAppContainer(TabsBarMainNavigator);

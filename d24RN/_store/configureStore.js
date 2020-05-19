import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './_reducers/homeReducer';
import listingReducer from './_reducers/listingReducer';
import productReducer from './_reducers/productReducer';
import cartReducer from './_reducers/cartReducer';
import favoriteReducer from './_reducers/favoriteReducer';
import {authentication}  from './_reducers/authenticationReducer';
import {registration} from './_reducers/registrationReducer';
import {alert} from './_reducers/alertReducer';
import {appInit} from './_reducers/appInit';

const rootReducer = combineReducers({
  homeData: homeReducer,
  listingData: listingReducer,
  productData: productReducer,
  cart: cartReducer,
  favoriteList:favoriteReducer,
  authentication:authentication,
  registration:registration,
  alert: alert,
  appInit:appInit
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;

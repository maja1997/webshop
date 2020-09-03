import { combineReducers } from 'redux';

import userReducer from 'redux/user/UserReducer';
import shopReducer from 'redux/shop/shop.reducer';
import cartReducer from 'redux/cart/CartReducer';
import landingReducer from 'redux/landing/LandingReducer';
import searchReducer from 'redux/search/search.reducer';

export default combineReducers({
  user: userReducer,
  shop: shopReducer,
  categories: landingReducer,
  cart: cartReducer,
  search: searchReducer,
});

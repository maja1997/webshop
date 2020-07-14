import { combineReducers } from 'redux';

import userReducer from 'redux/user/user.reducer';
import shopReducer from 'redux/shop/shop.reducer';

export default combineReducers({
  user: userReducer,
  shop: shopReducer,
});

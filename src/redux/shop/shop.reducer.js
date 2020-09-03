import ShopActionTypes from './ShopTypes';
import { addProduct } from './shop.utils';

const INITIAL_STATE = {
  products: {
    hats: [],
    sneakers: [],
    jeans: [],
    skirts: [],
    jackets: [],
  },
  filters: {
    price: [5, 200],
    brands: [],
    sizes: [],
    shoeSizes: [],
  },
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.UPDATE_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          [payload.type]: addProduct(state.products[payload.type], payload.products),
        },
      };
    case ShopActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          [payload.type]: payload.products,
        },
      };
    case ShopActionTypes.APPLY_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload,
        },
      };
    default:
      return state;
  }
};

export default shopReducer;

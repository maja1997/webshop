import { firestore } from 'firebase/firebase.util';
import ShopActionTypes from './ShopTypes';

export const updateProducts = (products, productType) => ({
  type: ShopActionTypes.UPDATE_PRODUCTS,
  payload: {
    products,
    type: productType,
  },
});

export const setProducts = (products, productType) => ({
  type: ShopActionTypes.SET_PRODUCTS,
  payload: {
    products,
    type: productType,
  },
});

export const fetchProducts = (productType) => (dispatch, getState) => {
  const { shop: { filters } } = getState();
  let collection = firestore.collection('products');
  let sizes;
  if (productType === 'sneakers') {
    sizes = [...filters.shoeSizes];
    if (sizes.length === 0) {
      sizes = [36, 37, 38, 39, 40, 41];
    }
  } else {
    sizes = [...filters.sizes];
    if (sizes.length === 0) {
      sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
    }
    sizes = sizes.map((size) => size.toUpperCase());
  }

  if (productType !== 'hats') {
    collection = collection.where('size', 'array-contains-any', sizes);
  }

  if (filters.brands.length === 1) {
    collection = collection.where('brand', '==', filters.brands[0]);
  }

  collection
    .where('type', '==', productType)
    .where('price', '>', filters.price[0])
    .where('price', '<', filters.price[1])
    .get()
    .then((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => products.push(doc.data()));
      dispatch(setProducts(products, productType));
    });
};

export const fetchRelatedProducts = (prodType, prodIds) => (dispatch) => {
  const prodIdsInt = prodIds.map((prodId) => Number(prodId));
  firestore.collection('products')
    .where('type', '==', prodType)
    .where('id', 'in', prodIdsInt)
    .get()
    .then((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => products.push(doc.data()));
      dispatch(updateProducts(products, prodType));
    });
};

export const fetchProduct = (prodType, prodId) => (dispatch) => {
  firestore.collection('products')
    .where('type', '==', prodType)
    .where('id', '==', Number(prodId))
    .get()
    .then((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => products.push(doc.data()));
      dispatch(updateProducts(products, prodType));
      dispatch(fetchRelatedProducts(prodType, products[0].similarProducts));
    });
};

export const applyFillter = (filter) => ({
  type: ShopActionTypes.APPLY_FILTERS,
  payload: filter,
});

import { firestore } from 'firebase/firebase.util';
import searchActionTypes from './search.actionTypes';

export const fetchSearchResultsSuccess = (products) => ({
  type: searchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
  payload: products,
});

export const loadingFetchResults = () => ({
  type: searchActionTypes.LOADING_FETCH_RESULTS,
});

export const fetchSearchResults = (name) => (dispatch) => {
  dispatch(loadingFetchResults());

  if (name === '') {
    dispatch(fetchSearchResultsSuccess([]));
    return;
  }
  firestore.collection('products')
    .orderBy(`searchableIndex.${name}`)
    .limit(10)
    .get()
    .then((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => products.push(doc.data()));
      dispatch(fetchSearchResultsSuccess(products));
    });
};

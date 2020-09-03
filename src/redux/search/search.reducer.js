import searchActionTypes from './search.actionTypes';

const INITIAL_STATE = {
  searchedProducts: [],
  loading: false,
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case searchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchedProducts: payload,
        loading: false,
      };
    case searchActionTypes.FETCH_SEARCH_RESULTS:
      return {
        ...state,
      };
    case searchActionTypes.LOADING_FETCH_RESULTS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default searchReducer;

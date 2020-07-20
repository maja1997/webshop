import LANDING_DATA from './LandingData';

const INITIAL_STATE = {
  categories: LANDING_DATA,
};

const landingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default landingReducer;

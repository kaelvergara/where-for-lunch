import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/placeActionTypes';

const initialState = {
  featuredPlace: {},
};
const placeReducer = handleActions(
  {
    [actionTypes.SET_FEATURED_PLACE](state, action) {
      return { ...state, featuredPlace: action.payload };
    },
    [actionTypes.SET_DETAILS](state, action) {
      return { ...state, details: action.payload };
    },
  },
  initialState,
);

export default placeReducer;

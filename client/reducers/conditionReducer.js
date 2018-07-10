import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/conditionActionTypes';

const initialState = {
  radius: 500,
  categories: [],
};
const conditionReducer = handleActions(
  {
    [actionTypes.SET_RADIUS](state, action) {
      return { ...state, radius: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      return { ...state, latitude, longitude };
    },
    [actionTypes.TOGGLE_CATEGORY](state, action) {
      const categoryIndex = state.categories.indexOf(action.payload);
      const isCategoryAlreadyAdded = categoryIndex > -1;
      if (isCategoryAlreadyAdded) {
        return { ...state, categories: [...state.categories.slice(0, categoryIndex), ...state.categories.slice(categoryIndex + 1)] };
      } else if (!isCategoryAlreadyAdded) {
        return { ...state, categories: [...state.categories, action.payload] };
      }
    },
  },
  initialState,
);

export default conditionReducer;

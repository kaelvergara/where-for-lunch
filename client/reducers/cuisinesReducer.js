import { handleActions } from 'redux-actions';

const initialState = {
  categories: [
    { value: 'bbq', title: 'Barbeque' },
    { value: 'hotdogs', title: 'Fast Food' },
    { value: 'cafes', title: 'Cafes' },
  ],
};
const cuisineReducer = handleActions(
  {},
  initialState,
);

export default cuisineReducer;

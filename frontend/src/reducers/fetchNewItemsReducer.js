import { FETCH_NEW_ITEMS } from '../actions/types';

export default function fetchNewItemstReducer(state = [], action) {
  switch (action.type) {
    case FETCH_NEW_ITEMS:
      return action.newItems;
    default:
      return state;
  }
}
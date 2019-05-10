import { FETCH_DISHES, FETCH_DISH_SEARCH_RESULTS } from '../actions/types';

const defaultState = {
  activeDish: {
  },
  dishes: [],
  searchResults: []
}

export default function dishReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_DISHES:
      return {
        ...state,
        dishes: action.dishes,
      }
    case FETCH_DISH_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults
      }
    default:
      return state;
  }
}
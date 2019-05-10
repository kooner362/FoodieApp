import { FETCH_RESTAURANTS, FETCH_RESTAURANT, FETCH_RESTAURANT_SEARCH_RESULTS } from '../actions/types';

const defaultState = {
  activeRestaurant: {
    menuitems: [],
    restauranttags: []
  },
  restaurants: [],
  searchResults: []
}

export default function restaurantReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
      }
    case FETCH_RESTAURANT:
      return {
        ...state,
        activeRestaurant: action.restaurant
      }
    case FETCH_RESTAURANT_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults
      }
    default:
      return state;
  }
}
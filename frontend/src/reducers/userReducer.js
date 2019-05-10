import { FETCH_MY_RATINGS, FETCH_MY_RATINGS_BY_RESTAURANT, ADD_RATING, DELETE_RATING, EDIT_RATING, LOGIN } from '../actions/types';

const defaultState = {
  user: { id: null },
  myRatings: [],
  myRatingsByRestaurant: [],
  newRating: [],
  deletedRating: null,
  editedRating: null
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_MY_RATINGS:
      return {
        ...state,
        myRatings: action.ratings
      }
    case FETCH_MY_RATINGS_BY_RESTAURANT:
      return {
        ...state,
        myRatingsByRestaurant: action.ratings
      }
    case ADD_RATING:
      return {
        ...state,
        newRating: action.data
      } 
    case DELETE_RATING:
      return {
        ...state,
        deletedRating: action.id
      }
    case EDIT_RATING:
      return {
        ...state,
        editedRating: action.id
      }
    case LOGIN:
    return {
      ...state,
      user: action.user
    }
    default:
      return state;
  }
}
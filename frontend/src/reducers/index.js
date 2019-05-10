import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import menuItem from './menuItemReducer';
import fetchNewItems from './fetchNewItemsReducer';
import myRatings from './userReducer';
import dishes from './dishReducer';
import user from './userReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    restaurants: restaurants,
    myRatings: myRatings,
    dishes: dishes,
    form: formReducer,
    user: user,
    newItems: menuItem,
    fetchNewItems: fetchNewItems
})

import { NEW_ITEM_ADDED, NEW_ITEM_REMOVED, REMOVE_ALL_SUBMITTED_MENU_ITEMS } from '../actions/types';

const initialState = {
  menuItem: []
}
export default function menuItemReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_ITEM_ADDED:
      state.menuItem.push(action.menuItem)
    return {
      ...state,
      menuItem: state.menuItem
    }
    case NEW_ITEM_REMOVED:
     return {
       ...state,
       menuItem: state.menuItem.filter((item) => item.name !== action.menuItem.name)
     }
     case REMOVE_ALL_SUBMITTED_MENU_ITEMS:
     return {
       ...state,
       menuItem: []
     };
    default:
      return state;
  }
}
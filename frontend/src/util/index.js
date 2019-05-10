import axios from 'axios';

export const postMenuItemsToServer = (menuItem) => {
  for ( let k = 0; k < menuItem.length; k++ ) {
    axios
    .post ('http://localhost:3001/items', (menuItem[k]) )
  }
}
import React, { Fragment } from 'react';
import RestaurantListItem from '../components/RestaurantListItem';

const RestaurantListView = (props) => {
  const { restaurants } = props;

  if (!restaurants.length) {
    return (
      <div>
        No Restaurants
      </div>
    )
  }
  return (
    <Fragment>
      {restaurants.map(restaurant => {
          return (
            <RestaurantListItem restaurant={restaurant} key={restaurant.id} />
          );
        })}
    </Fragment>
  );
}

export default RestaurantListView; 



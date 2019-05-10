import React, { Fragment } from 'react';
import DishListItem from '../components/DishListItem';

const DishListView = (props) => {
  const { dishes } = props;
  if (!dishes.length) {
    return (
      <div>
        No Dishes
      </div>
    )
  }
  return (
    <Fragment>
      {dishes.map((dish, index) => {
          return (
            <DishListItem dish={dish} index={index} key={dish.id} />
          );
        })}
    </Fragment>
  );
}

export default DishListView; 



import React, { Fragment } from 'react';
import ApproveDishListItem from '../components/ApproveDishListItem';

const ApproveDishListView = (props) => {
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
      {dishes.map(dish => {
          return (
            <ApproveDishListItem handleReject={props.handleReject} handleApproval={props.handleApproval} dish={dish} key={dish.id} />
          );
        })}
    </Fragment>
  );
}

export default ApproveDishListView; 



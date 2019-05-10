import React, { Component, Fragment } from 'react';
import RatingListItem from './RatingListItem';
import { deleteRating } from '../../actions/index'
import { editRating } from '../../actions/index'
import { connect } from 'react-redux';

class RatingListView extends Component {

  deleteRatingHandler = (rating) => {
    this.props.dispatch(deleteRating(1, rating.id, rating.menuitem.restaurantId))
  }

  editRatingHandler = (rating, newValue) => {
    const request = {
      userid: 1,
      rating: newValue,
      id: rating.id,
      restaurantId: rating.menuitem.restaurantId
    }
    this.props.dispatch(editRating(request));
  }

  render() {
    const { ratings } = this.props;

    if (!ratings.length) {
      return (
        <div>
          No ratings
      </div>
      )
    }
    return (
      <Fragment>
        {ratings.map((rating, index) => {
          return (
            <RatingListItem deleteRatingHandler={this.deleteRatingHandler} editRatingHandler={this.editRatingHandler}  rating={rating} key={rating.id} index={index} />
          );
        })}
      </Fragment>
    );
  }
}

export default connect()(RatingListView);
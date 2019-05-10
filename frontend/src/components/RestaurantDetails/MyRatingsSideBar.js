import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux';
import { fetchAllMyRatingsByRestaurant } from '../../actions/index';
import RatingListView from './RatingListView';

class MyRatingsSideBar extends Component {

  componentDidMount() {
    const restaurantId = this.props.location.pathname.split('/restaurant/')[1];
    this.props.dispatch(fetchAllMyRatingsByRestaurant(1, restaurantId));
  }

  render() {
    const { dishes } = this.props;
  
    return (
      <div className="col-lg-4">
        <div className="p-4 mb-3 bg-white">
          <h3 className="h4 text-black mb-3"><strong>My Ratings</strong></h3>
            <RatingListView ratings={dishes}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.myRatings.myRatingsByRestaurant,
    // activeRestaurant: state.restaurants.activeRestaurant
  };
};

export default connect(
  mapStateToProps
)(withRouter(MyRatingsSideBar));
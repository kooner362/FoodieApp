import RestaurantListView from '../RestaurantListView';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllRestaurants } from '../../actions/index';

class MainView extends Component {

  componentDidMount() {
    this.props.dispatch(fetchAllRestaurants());
  }

  render() {
    const { restaurants } = this.props

    return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-start text-left mb-5">
          <div className="col-md-9">
            <h2 className="font-weight-bold text-black">Discover Restaurants</h2>
          </div>
        </div>
        <RestaurantListView restaurants={restaurants} />
      </div>
    </div>
  )}
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants
  };
};

export default connect(
  mapStateToProps
)(MainView);
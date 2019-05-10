import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSingleRestaurant } from '../../actions/index';
import Summary from './Summary';
import DishListView from './DishListView';
import AddRatingContainer from './AddRatingContainer';
import MyRatingsSideBar from './MyRatingsSideBar';
import HeroCarousel from './HeroCarousel';

class RestaurantDetails extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSingleRestaurant(this.props.location.pathname));
  }

  render() {
    return (
      <Fragment>
        <HeroCarousel />
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="bg-white col-md-12 col-lg-8 mb-5">
                <Summary details={this.props.activeRestaurant} />
                <div className="container p-0 pb-5">
                  <div className="row justify-content-start text-left"></div>
                  <div className="col-md-9 px-0 pb-4" data-aos="fade">
                    <h2 className="font-weight-bold text-black">Top Dishes</h2>
                  </div>
                  {/* {restaurant && restaurant.menuitems && <DishListView dishes={restaurant.menuitems} />} */}
                  <DishListView dishes={this.props.activeRestaurant.menuitems} />
                </div>
                <AddRatingContainer restaurant={this.props.activeRestaurant} />
              </div>
              <MyRatingsSideBar />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeRestaurant: state.restaurants.activeRestaurant
  };
};

export default connect(
  mapStateToProps
)(RestaurantDetails);
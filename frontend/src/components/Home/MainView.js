import DishListView from '../DishListView';
import React from 'react';
import { connect } from 'react-redux';

const MainView = (props) => {
  const { dishes } = props
  
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-start text-left mb-5">
          <div className="col-md-9">
            <h2 className="font-weight-bold text-black">Top Dishes</h2>
          </div>
        </div>
        <DishListView dishes={dishes} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dishes: state.dishes.dishes };
};

export default connect(
  mapStateToProps
)(MainView);
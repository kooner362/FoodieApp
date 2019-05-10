import DishListView from '../DishListView';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllDishes } from '../../actions/index';

class MainView extends Component {

  componentDidMount() {
    this.props.dispatch(fetchAllDishes());
  }

  render() {
    const { dishes } = this.props
  
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-start text-left mb-5">
          <div className="col-md-9">
            <h2 className="font-weight-bold text-black">Discover Dishes</h2>
          </div>
        </div>
        <DishListView dishes={dishes} />
      </div>
    </div>
  );
  }
}
  

const mapStateToProps = state => {
  return {
    dishes: state.dishes.dishes
  };
};

export default connect(
  mapStateToProps
)(MainView);
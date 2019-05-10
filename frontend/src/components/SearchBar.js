import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { fetchAllSearchRestaurants } from '../actions/index';
import { fetchAllSearchDishes } from '../actions/index';
import { Redirect } from 'react-router-dom';

const InputField = (field) => (
  <div className="col-md-6 col-lg-9 mb-3 mb-lg-0">
    <input {...field.input} {...field} />
  </div>
)

let RestaurantSearchForm = props => {
  const { handleSubmit } = props;
  return (

    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* <div className="col-md-6 col-lg-9 mb-3 mb-lg-0"> */}
        <Field name="restaurantQuery" type="text" component={InputField} className="form-control" placeholder="eg. Italian, Brunch, Pizza, etc..." />
        {/* </div> */}
        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <button type="submit" className="btn btn-primary btn-block">Search</button>
        </div>
      </div>
    </form>
  )
}

let DishSearchForm = props => {
  const { handleSubmit } = props;
  return (

    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* <div className="col-md-6 col-lg-9 mb-3 mb-lg-0"> */}
        <Field name="dishQuery" type="text" component={InputField} className="form-control" placeholder="eg. Italian, Brunch, Pizza, etc..." />
        {/* </div> */}
        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <button type="submit" className="btn btn-primary btn-block">Search</button>
        </div>
      </div>
    </form>
  )
}

RestaurantSearchForm = reduxForm({
  form: 'restaurantSearch'
})(RestaurantSearchForm);

DishSearchForm = reduxForm({
  form: 'dishSearch'
})(DishSearchForm);

class SearchBar extends React.Component {

  state = {
    redirect: false
  }

  handleRestaurantSearch = values => {

    // dispatch function is passed to props automatically when a component is connected
    // https://react-redux.js.org/using-react-redux/connect-mapdispatch 
    this.props.dispatch(fetchAllSearchRestaurants(values.restaurantQuery));
    this.setState({ redirect: true });
  }

  handleDishSearch = values => {

    // dispatch function is passed to props automatically when a component is connected
    // https://react-redux.js.org/using-react-redux/connect-mapdispatch 
    this.props.dispatch(fetchAllSearchDishes(values.dishQuery));
    this.setState({ redirect: true });
  }

  clickHandler = event => {
    event.preventDefault();
    if(event.target.text === 'Top Restaurants') {
      this.setState({tab: false});
    } else {
      this.setState({tab: true});
    }
  }

  render() {
    const { redirect } = this.state
    if (!this.state.tab) {
      return (
        <Fragment>
          {/* {redirect && (<Redirect to="/dishes/results" />)} */}
          {redirect && (<Redirect to="/restaurants/results" />)}
          <div className="dish-restaurant-search">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a onClick={this.clickHandler} className="nav-link active py-3" id="pills-restaurant-tab" data-toggle="pill" href="#pills-restaurant"
                  role="tab" aria-controls="pills-restaurant" aria-selected="true">Top Restaurants</a>
              </li>
              <li className="nav-item">
                <a onClick={this.clickHandler} className="nav-link py-3" id="pills-dish-tab" data-toggle="pill" href="#pills-dish" role="tab"
                  aria-controls="pills-dish" aria-selected="false">Top Dishes</a>
              </li>
            </ul>
            <div className="tab-content bg-white p-4 rounded" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-restaurant" role="tabpanel" aria-labelledby="pills-restaurant-tab">
                <RestaurantSearchForm onSubmit={this.handleRestaurantSearch} />
                {/* <DishSearchForm onSubmit={(this.handleDishSearch)} /> */}
              </div>
            </div>
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          {redirect && (<Redirect to="/dishes/results" />)}
          {/* {redirect && (<Redirect to="/restaurants/results" />)} */}
          <div className="dish-restaurant-search">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a onClick={this.clickHandler} className="nav-link py-3" id="pills-restaurant-tab" data-toggle="pill" href="#pills-restaurant"
                  role="tab" aria-controls="pills-restaurant" aria-selected="true">Top Restaurants</a>
              </li>
              <li className="nav-item">
                <a onClick={this.clickHandler} className="nav-link active py-3" id="pills-dish-tab" data-toggle="pill" href="#pills-dish" role="tab"
                  aria-controls="pills-dish" aria-selected="false">Top Dishes</a>
              </li>
            </ul>
            <div className="tab-content bg-white p-4 rounded" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-restaurant" role="tabpanel" aria-labelledby="pills-restaurant-tab">
                {/* <RestaurantSearchForm onSubmit={this.handleRestaurantSearch} /> */}
                <DishSearchForm onSubmit={(this.handleDishSearch)} />
              </div>
            </div>
          </div>
        </Fragment>
      )
    }
  }
}

export default connect()(SearchBar);
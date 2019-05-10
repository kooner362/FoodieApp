import ApproveRestaurantListView from '../ApproveRestaurantListView';
import React, { Component } from 'react';
import axios from 'axios';
const apiUrl = 'http://localhost:3001';
import { connect } from 'react-redux';
import { fetchAllRestaurants } from '../../actions/index';

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {restaurants: []};
    this.handleApproval = this.handleApproval.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }
  
  componentDidMount() {
    return axios.get(`${apiUrl}/unapprovedrestaurants`)
      .then(response => {
        this.setState({restaurants: response.data})
      })
      .catch(error => {
        throw (error);
      });
  }

  handleApproval = (event, id) => {
    event.preventDefault();
    return axios.patch(`${apiUrl}/restaurant/${id}`, {approved: true})
      .then(response => {
        this.setState((prevState) => {
          let restaurants = prevState.restaurants;
          let new_restaurants = [];
          for(let i=0; i < restaurants.length; i++) {
            if (restaurants[i].id !== id) {
              new_restaurants.push(restaurants[i]);
            }
          }
          this.props.dispatch(fetchAllRestaurants());
          return {restaurants: new_restaurants};
        });
      })
      .catch(error => {
        throw (error);
      });
  }

  handleReject = (event, id) => {
    event.preventDefault();
    return axios.delete(`${apiUrl}/restaurant/${id}`, {approved: true})
      .then(response => {
        this.setState((prevState) => {
          let restaurants = prevState.restaurants;
          let new_restaurants = [];
          for(let i=0; i < restaurants.length; i++) {
            if (restaurants[i].id !== id) {
              new_restaurants.push(restaurants[i]);
            }
          }
          return {restaurants: new_restaurants};
        });
      })
      .catch(error => {
        throw (error);
      });
  }

  render() {
    return (
      <div className="site-section bg-light">
        <div className="container">
          <div className="row justify-content-start text-left mb-5">
            <div className="col-md-9">
              <h2 className="font-weight-bold text-black">Approve Restaurants</h2>
            </div>
          </div>
          <ApproveRestaurantListView handleReject={this.handleReject} handleApproval={this.handleApproval} restaurants={this.state.restaurants} />
        </div>
      </div>
    );
  }
};

export default connect()(MainView);
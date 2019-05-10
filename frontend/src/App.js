import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import ExploreRestaurants from './components/ExploreRestaurants'
import RestaurantSearchResults from './components/RestaurantSearchResults'
import RestaurantDetails from './components/RestaurantDetails'
import DishSearchResults from './components/DishSearchResults';
import ExploreDishes from './components/ExploreDishes';
import Navigation from './components/Navigation'
import MyRatings from './components/MyRatings'
import Login from './components/Login';
import ApproveRestaurants from './components/ApproveRestaurants';
import ApproveDishes from './components/ApproveDishes';
import { BrowserRouter, Route } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import NewRestaurant from './components/AddNewRestaurant/NewRestaurant';
import AddNewItem from './components/AddNewDish/AddNewItem';
import Success from './components/Success';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="site-wrap">
            <Navigation />
            <Route exact path='/' component={Home} />
            <Route path='/restaurants/explore' component={ExploreRestaurants} />
            <Route path='/restaurants/results' component={RestaurantSearchResults} />
            <Route path='/restaurants/new' component={NewRestaurant} />
            <Route path='/restaurant' component={RestaurantDetails} />
            <Route path='/dishes/explore' component={ExploreDishes} />
            <Route path='/dishes/results' component={DishSearchResults} />
            <Route path='/dishes/new' component={AddNewItem} />

            <Route path='/myratings' component={MyRatings} />
            <Route path='/login' component={Login} />
            <Route path='/approve/restaurants' component={ApproveRestaurants} />
            <Route path='/approve/dishes' component={ApproveDishes} />
            <Route path='/success' component={Success} />
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;

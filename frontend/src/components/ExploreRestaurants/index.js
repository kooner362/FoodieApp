import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import HeroSearch from '../HeroSearch';
class Restaurants extends Component {
  render() {
    return (
      <Fragment>
        <HeroSearch/>
        <MainView />
      </Fragment>
    );
  }
}

export default Restaurants;
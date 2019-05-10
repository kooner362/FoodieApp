import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import HeroSearch from '../HeroSearch';

class MyRatings extends Component {
  render() {
    return (
      <Fragment>
        <HeroSearch />
        <MainView />
      </Fragment>
    );
  }
}

export default MyRatings;
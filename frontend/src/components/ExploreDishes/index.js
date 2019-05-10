import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import HeroSearch from '../HeroSearch';

class Dishes extends Component {
  render() {
    return (
      <Fragment>
        <HeroSearch/>
        <MainView />
      </Fragment>
    );
  }
}

export default Dishes;
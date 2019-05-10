import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import HeroBanner from '../HeroBanner'

class ApproveDishes extends Component {
  render() {
    return (
      <Fragment>
        <HeroBanner />
        <MainView />
      </Fragment>
    );
  }
}

export default ApproveDishes;
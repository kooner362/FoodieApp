import React, { Component, Fragment } from 'react';
import Hero from '../Hero';
import MainView from './MainView';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <MainView />
      </Fragment>
    );
  }
}

export default Home;
import React, { Component, Fragment } from 'react';
import MainView from './MainView';
import HeroBanner from '../HeroBanner';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <HeroBanner />
        <MainView />
      </Fragment>
    );
  }
}

export default Login;
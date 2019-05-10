import React, { Component, Fragment } from 'react';
import HeroSearch from './HeroSearch';

class Success extends Component {
  render() {
    return (
      <Fragment>
        <HeroSearch />

        <div className="site-section bg-light">
          <div className="container">
            <div className="row d-flex justify-content-center text-center mb-5">
              <div className="col-md-6">
                <h2 className="font-weight-bold text-black mb-5">Success</h2>
                <p>
                  Thank you for your contribution! Please allow up to 48 hours for your submission to be approved and points to be credited to your account!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Success;
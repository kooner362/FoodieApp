import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Background from '../images/hero_bg_4.jpg';

const heroStyle = {
  backgroundImage: `url(${Background})`
}

class Hero extends Component {
  render() {
    return (
      <div className="site-blocks-cover" style={heroStyle} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row row-custom align-items-center">
            <div className="col-md-10">
              <h1 className="mb-2 text-black w-75"><span className="font-weight-bold">Discover something delicious</span></h1>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
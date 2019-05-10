import React, { Component } from 'react';
import Background from '../images/hero_bg_4.jpg';
import SearchBar from './SearchBar';

const heroStyle = {
    backgroundImage: `url(${Background})`
}

class HeroSearch extends Component {
    render() {
        return (
            <div className="unit-5 overlay hero-searchbar" style={heroStyle}>
                <div className="container text-center searchbar-container">
                    <div className="row row-custom align-items-center">
                        <div className="col-md-10">
                            <SearchBar/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSearch;
import React, { Component } from 'react';
import Background from '../images/hero_bg_6.jpg';

const style = {backgroundImage: (`url(${Background})`)}

class HeroBanner extends Component {
    
    render() {
        return (
            <div className="unit-5 overlay hero-container" style={style}></div>
        );
    }
}

export default HeroBanner;
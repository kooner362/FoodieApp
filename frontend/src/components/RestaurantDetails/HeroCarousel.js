import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const HeroCarousel = (props) => {

  return (
    <Carousel
      interval={3000}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/hero_half_1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/hero_half_2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/hero_half_3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel; 
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
 return (
  <>
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/VjTMgvR/Debotakhum-Day-Trip.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/ncSz8gW/Lama-Alikadam.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/RjwPFfz/Sajek-Premium-Package.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
  </>
 );
};

export default Banner;
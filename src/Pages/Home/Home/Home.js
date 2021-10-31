import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
 return (
  <div id="home">
   <Banner></Banner>
   <Services></Services>
   <AboutUs></AboutUs>
   <Footer></Footer>
  </div>
 );
};

export default Home;
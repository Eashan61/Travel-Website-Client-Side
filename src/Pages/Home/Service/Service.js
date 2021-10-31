import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
 const {_id, name, price, time, img} = service;
 return (
  <div className="service">
   <img className="responsive" src={img} alt="" />
   <h3>{name}</h3>
   <h5>Price: {price}</h5>
   <h6>Time: {time}</h6>
   <Link to={`/booking/${_id}`}>
   <button className="btn btn-primary mb-3">Book {name}</button>
   </Link>
  </div>
 );
};

export default Service;
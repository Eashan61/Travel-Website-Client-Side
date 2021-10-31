import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
 return (
  <div>
   <img className="responsive" src="https://i.ibb.co/r4VNYxz/3828537.jpg" alt="" />

  <Link to="/">
  <button className="btn btn-danger">Go Back</button>
  </Link>

  </div>
 );
};

export default NotFound;
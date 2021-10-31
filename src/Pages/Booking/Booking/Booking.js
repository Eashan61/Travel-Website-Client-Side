import React from 'react';
import './Booking.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
 const {user} = useAuth();
 const {serviceId} = useParams();
 const [service, setService] = useState({})

 useEffect( ()=> {
  fetch(`http://localhost:5000/services/${serviceId}`)
  .then(res => res.json())
  .then(data => setService(data));
 }, [])

 // Getting Other Details
 // const [details, setDetails] = useState({});
 // useEffect(()=> {
 //  fetch('/http://localhost:5000/services')
 //  .then(res => res.json())
 //  .then(data => setDetails(data.find(x => parseInt(x.id)=== +serviceId)));
 // })
 return (
  <div>
   <h2>This is Booking: {serviceId}</h2>
   <img className="responsive" src={service.img} alt="" />
   <h3>{service.name}</h3>
   <h3>{service.price}</h3>
   <h3>{service.time}</h3>
   {/* Showing User name and email */}
   <h3>
   {user?.displayName}
   </h3>
   <h3>
   {user?.email}
   </h3>
  </div>
 );
};

export default Booking;
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const MyOrders = () => {

 const {user} = useAuth();
 const [service, setService] = useState([])

 useEffect( ()=> {
  fetch(`http://localhost:5000/order`)
  .then(res => res.json())
  .then(data => {
   const myOrder = data.filter(x => x.email === user.email);
   setService(myOrder);
  });
 }, [])

 console.log(service);
 const cancelOrder = (id) => {
  fetch(`http://localhost:5000/order/${id}`, {
   method: 'delete'
  })
  .then(res => res.json()) 
  .then(data => { if (data.deletedCount > 0) { 
   alert('Deleted Seccessfully') 
   const newAllUser = service.filter(a => a._id !== id) 
   setService(newAllUser) } 
  })
 } 

 return (
  <div id="my-orders">
   <h3>My Orders:</h3>
   <Row xs={1} md={2} lg={4} className="g-4">
   {
    service.map(order => <Col>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={order.img} />
    <Card.Body>
      <Card.Title>{order.title}</Card.Title>
      <Card.Title>{order.price}</Card.Title>
      <Card.Title>{order.name}</Card.Title>
      <Card.Title>{order.email}</Card.Title>
      
      <Button onClick={()=>cancelOrder(order._id)} variant="primary">Cancel Order</Button>
    </Card.Body>
  </Card>
  </Col>)
   }
   </Row>
  </div>
 );
};

export default MyOrders;
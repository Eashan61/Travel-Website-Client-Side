import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth();
 return (
  <>
   <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Travel Hobe</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} className="text-white" to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} className="text-white" to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} className="text-white" to="/home#aboutus">About Us</Nav.Link>
      {user?.email ?
        <Nav.Link as={HashLink} className="text-white" to="/manageallorders#manage-allorders">Manage AllOrders</Nav.Link>:
        <>
        </>
        }
      {user?.email ?
        <Nav.Link as={HashLink} className="text-white" to="/myorders#my-orders">My Orders</Nav.Link>:
        <>
        </>
        }
      {user?.email ?
        <Nav.Link as={HashLink} className="text-white" to="/addservice#add-service">Add Service</Nav.Link>:
        <>
        </>
        }
      {user?.email ?
        <button onClick={logOut} className="btn btn-primary">LogOut</button>:
        <Nav.Link as={Link} className="text-white" to="/login">Login</Nav.Link>
        }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
 );
};

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function BasicNav() {

  const [userType, setUserType] = useState('');


  useEffect(() => {
    // Retrieve the NAS value from localStorage
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, [userType]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">E-Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {userType === 'employee' ? null : <Nav.Link as={Link} to="/">Hotel</Nav.Link>}
            <Nav.Link as={Link} to="/Reservation">Reservation/locations</Nav.Link>
            <Nav.Link as={Link} to="/User">User</Nav.Link>
          <Nav.Link as={Link} to="/Register">Register/Login</Nav.Link>
          {userType === 'employee' ?  <Nav.Link as={Link} to="/RoomE">Room</Nav.Link>: null}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;
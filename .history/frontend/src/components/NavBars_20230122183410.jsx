import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbars() {

  return (
    <Navbar className="navbar nav" bg="primary " expand="lg" variant="secondary">
      <Container className="container">
      <Link className="nav-link text-white" to="/" rel="noopener noreferrer">
                <Navbar.Brand>Hotel Finder</Navbar.Brand>
              </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <Link className="me-4 nav-link text-white" to="/tips">Tourist tips</Link>
            <Link className="me-4 nav-link" to="/blog">Blog</Link>                          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;



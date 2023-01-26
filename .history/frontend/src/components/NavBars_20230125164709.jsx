import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

function Navbars() {
  const { isAuth } = useSelector((state) => state.auth)

  return (
    <Navbar className="navbar nav" bg="primary" expand="lg" variant="secondary">
      <Container className="container">
      {isAuth ? (        
<div>
          <Link className="nav-link" to="/" rel="noopener noreferrer">
            <Navbar.Brand className="brand fw-bold">Hotel Finder</Navbar.Brand>
          </Link>
        </div>
          ) : (
             <Navbar.Toggle aria-controls="basic-navbar-nav" /><Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100 justify-content-end">
             
                <
                <div>
                  <Link className="me-4 nav-link" to="/register">Register</Link>
                 
                </div> < div>
                  <Link className="me-4 nav-link" to="/tips">Tourist tips</Link></div>
                <div><Link className="me-4 nav-link" to="/blog">Blog</Link>
                </div>
              </Nav>)}
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navbars;



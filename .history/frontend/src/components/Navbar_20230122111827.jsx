import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import {observer} from "mobx-react-lite";

function NavBar() {

  return (
    <Navbar className="navbar nav" bg="light" expand="lg" variant="secondary">
      <Container className="container">
      <Link className="nav-link" to="/" rel="noopener noreferrer">
                <Navbar.Brand>Hotel Finder</Navbar.Brand>
              </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <Link className="me-4 nav-link" to="/tourist_tips">Tourist tips</Link>
            <Link className="me-4 nav-link" to="/blog">Blog</Link>
              
                    <NavDropdown title="User" id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                     
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
        
                    <Link className="nav-link" to="/signin">
                      Sign In</Link>
                 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



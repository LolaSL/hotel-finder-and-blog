import React from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation, } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import {  onLogout } from '../apis/auth';
import { unauthenticateUser } from '../redux/slices/authSlice'
import { useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbars() {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  
  const logout = async () => {
    try {
      await onLogout()

      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <Navbar className="navbar nav" bg="primary" expand="lg" variant="secondary">
      <Container className="container">
        {isAuth ? (
          <div className="d-flex me-auto">
            <Link className="nav-link" to="/" rel="noopener noreferrer">
              <Navbar.Brand className="brand fw-bold">
                Hotel Finder
              </Navbar.Brand>
            </Link>
            <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orders">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
            <Link
              className="nav-link justify-content-end"
             to={`/?redirect=${redirect}`}
              rel="noopener noreferrer"
            >
              <Button className="brand fw-bold"onClick={() => logout()} >Logout</Button>
            </Link>
          </div>
        ) : (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100 justify-content-end">
                <div>
                  <Link className="me-4 nav-link" to="/register">
                    Register
                  </Link>
                </div>
                <div>
                  <Link className="me-4 nav-link" to="/tips">
                    Tourist tips
                  </Link>
                </div>
                <div>
                  <Link className="me-4 nav-link" to="/blog">
                    Blog
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default Navbars;
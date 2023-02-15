import React, { useContext} from 'react';
import Container from "react-bootstrap/Container";
import { Link, useLocation, } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import {  onLogout } from '../apis/auth';
import { unauthenticateUser } from '../redux/slices/authSlice'
import { useDispatch } from 'react-redux';
import  NavDropdown   from 'react-bootstrap/NavDropdown ';
import { LinkContainer } from "react-router-bootstrap";
import { Store } from '../Store.js';



function Navbars() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  
  const logout = async () => {
    try {
      await onLogout()
      ctxDispatch({ type: 'USER_LOGOUT' });
      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
      localStorage.removeItem('userInfo')
      window.location.href = '/login';
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <Navbar className="navbar nav"  expand="lg" variant="secondary">
      <Container className="container d-flex">
        {isAuth ? (
        
          <div className="">
            <Link className="nav-link" to="/" rel="noopener noreferrer">
              <Navbar.Brand className="brand fw-bold">
                Hotel Finder
              </Navbar.Brand>
            </Link>
        
            
            <Dropdown NavDropdown title={userInfo.id} id="basic-nav-dropdown" className=" me-auto fw-bold justify-content-end">
          
            <Link
                className="dropdown-item"
                to={`/?redirect=${redirect}`}
                onClick={() => logout()}
              >
                Logout
              </Link>
            </Dropdown>
          </div>
        ) : (
            <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100 justify-content-end">
                <div>
                  <Link className="me-4 nav-link" to="/register">
                    Register
                  </Link>
                </div>
                  <div>
                    <Dropdown title="Journey of all experiences" id="basic-nav-dropdown">
                      <LinkContainer  className="dropdown-item" to='/journey'>
                        <Dropdown.Item>Find your next trip and destination</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer  className="dropdown-item" to='/places'>
                        <Dropdown.Item>Let's Go!</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer  className="dropdown-item" to='/tips'>
                        <Dropdown.Item>The best tourist tips</Dropdown.Item>
                      </LinkContainer>
                    </Dropdown>
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

import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => {
  return (
    <div>
      <Nav className="flex-column menu  w-100 pt-4">
        <NavDropdown
          title="Trip to Israel : the complete guide"
          id="basic-nav-dropdown"
        ></NavDropdown>
        <Link to="/time-to-visit" className="m-3  a-link">
          {" "}
          Best time to visit
        </Link>
        <Link to="/wheather-climate" className="m-3  a-link">
          Wheather and Climate
        </Link>
        <Link to="/reasons-to-visit" className="m-3  a-link">
          Reasons to visit Israel
        </Link>
        <Link to="/aeroport-quide" className="m-3  a-link">
          Ben Gurion Aeroport guide
        </Link>
        <Link to="/destinations" className="m-3  a-link">
          Top destinations
        </Link>
      </Nav>
    </div>
  );
};

export default Menu;

<NavDropdown title={userInfo.name} id="basic-nav-dropdown">
  <LinkContainer to="/profile">
    <NavDropdown.Item>User Profile</NavDropdown.Item>
  </LinkContainer>
  <LinkContainer to="/orders">
    <NavDropdown.Item>Order History</NavDropdown.Item>
  </LinkContainer>
  <NavDropdown.Divider />
  <Link className="dropdown-item" to="#signout" onClick={signoutHandler}>
    Sign Out
  </Link>
</NavDropdown>;

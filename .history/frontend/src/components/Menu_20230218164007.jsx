import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Menu = () => {
  return (
    <div>
      <Nav className="flex-column menu  w-100 pt-4 text-success">
          <LinkContainer to="/time-to-visit">
             Best time to visit
          </LinkContainer>
          <LinkContainer to="/wheather-climate" className="m-3  a-link">
            Wheather and Climate
          </LinkContainer>
          <LinkContainer to="/reasons-to-visit" className="m-3  a-link">
           Reasons to visit Israel
          </LinkContainer>
          <LinkContainer to="/aeroport-quide" className="m-3  a-link">
         Ben Gurion Aeroport guide
          <LinkContainer to="/slide" className="m-3  a-link">
            <NavDropdown.Item>Top destinations</NavDropdown.Item>
          </LinkContainer>
       
      </Nav>
    </div>
  );
};

export default Menu;

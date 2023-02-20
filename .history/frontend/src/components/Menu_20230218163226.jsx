import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Menu = () => {
  return (
    <div>
      <Nav className="flex-column menu  w-100 pt-4 text-">
        <Nav.Item
        
        > Trip to Israel : the complete guide</Nav.Item>
          <LinkContainer to="/time-to-visit">
            <NavDropdown.Item> Best time to visit</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/wheather-climate" className="m-3  a-link">
            <NavDropdown.Item>Wheather and Climate</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/reasons-to-visit" className="m-3  a-link">
            <NavDropdown.Item> Reasons to visit Israel</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/aeroport-quide" className="m-3  a-link">
            <NavDropdown.Item>Ben Gurion Aeroport guide</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/slide" className="m-3  a-link">
            <NavDropdown.Item>Top destinations</NavDropdown.Item>
          </LinkContainer>
       
      </Nav>
    </div>
  );
};

export default Menu;

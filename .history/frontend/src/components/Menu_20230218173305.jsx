import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Container className="sticky-sidebar">
      <Nav className="menu">
          <Link to="/time-to-visit" className="m-2  a-link-menu">
             Best time to visit
          </Link>
          <Link to="/wheather-climate" className="m-2  a-link-menu">
            Wheather and Climate
          </Link>
          <Link to="/reasons-to-visit" className="m-2  a-link-menu">
           Reasons to visit Israel
          </Link>
          <Link to="/aeroport-quide" className="m-2  a-link-menu">
         Ben Gurion Aeroport guide  </Link>
          <Link to="/slide" className="m-2 a-link-menu">
         Top destinations
          </Link>
      </Nav>
    </Container>
  );
};

export default Menu;

import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Container className="sticky-sidebar fluid rounded d-flex mt-2">
      <Nav className="menu flex-column text-justify ">
          <Link to="/time-to-visit" className="m-2  a-link-menu">
             Best time to visit
          </Link>
          <Link to="/wheather-climate" className="m-2  a-link-menu">
            Wheather & Climate
          </Link>
          <Link to="/reasons-to-visit" className="m-2  a-link-menu">
           Reasons to visit Israel
          </Link>
          <Link to="/aeroport-quide" className="m-2  a-link-menu">
         Ben Gurion Aeroport  </Link>
          <Link to="/slide" className="m-2 a-link-menu">
         Top destinations
          </Link>
      </Nav>
    </Container>
  );
};

export default Menu;

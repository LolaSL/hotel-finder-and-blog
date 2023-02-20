import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Nav className="flex-column menu  w-100 pt-4 text-success">
          <Link to="/time-to-visit">
             Best time to visit
          </Link>
          <Link to="/wheather-climate" className="m-3  a-link">
            Wheather and Climate
          </Link>
          <Link to="/reasons-to-visit" className="m-3  a-link">
           Reasons to visit Israel
          </Link>
          <LinkContainer to="/aeroport-quide" className="m-3  a-link">
         Ben Gurion Aeroport guide  </LinkContainer>
          <LinkContainer to="/slide" className="m-3  a-link">
         Top destinations
          </LinkContainer>
       
      </Nav>
    </div>
  );
};

export default Menu;

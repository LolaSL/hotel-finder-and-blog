import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Nav className="flex-column menu  w-100 pt-4 text-success">
          <Link to="/time-to-visit" className="me-3  a-link-menu">
             Best time to visit
          </Link>
          <Link to="/wheather-climate" className="m-3  a-link-menu">
            Wheather and Climate
          </Link>
          <Link to="/reasons-to-visit" className="m-3  a-link-menu">
           Reasons to visit Israel
          </Link>
          <Link to="/aeroport-quide" className="m-3  a-link-menu">
         Ben Gurion Aeroport guide  </Link>
          <Link to="/slide" className="m-3  a-link-menu">
         Top destinations
          </Link>
       
      </Nav>
    </div>
  );
};

export default Menu;

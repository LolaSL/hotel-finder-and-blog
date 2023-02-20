import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
// import { SocialIcon } from "react-social-icons";

const Menu = () => {
  // const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  return (
    <div
    >
      <Nav className="flex-column menu  w-100 pt-4">
        <Nav.Item className="m-3 nav-item">
          Trip to Israel : the complete guide
        </Nav.Item>
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

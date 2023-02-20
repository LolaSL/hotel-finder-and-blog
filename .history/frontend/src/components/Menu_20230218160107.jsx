import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import { SocialIcon } from 'react-social-icons';

const Menu = () => {
    // const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    return (
      
        <div
        // className={
        //   sidebarIsOpen
        //     ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
        //     : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
        // }
      >
        <Nav className="flex-column text-white w-100 pt-4">
        <Nav.Item className="m-3 nav-item">
           
           Trip to Israel : the complete guide
          </Nav.Item>
                {/* <Nav.Item className="m-3 ">
            <SocialIcon url="https://linkedin.com" className="me-2 social" style={{ height: 25, width: 25 }} />
            Linkedin
          </Nav.Item>
          <Nav.Item className="m-3 ">
            <SocialIcon url="https://github.com/" className="me-2 social" style={{ height: 25, width: 25 }} />
            Github
          </Nav.Item> */}
          <Link to="/#" className="m-3 text-white a-link">
            {" "}
            New Arrivals
          </Link>
          <Link to="/shop" className="m-3 text-white a-link">
            Arts Shop
          </Link>
          <Link to="/search" className="m-3 text-white a-link">
            Find your Arts
          </Link>
          <Link to="/events" className="m-3 text-white a-link">
            Events
          </Link>
        </Nav>
      </div>

  )
}

export default Menu
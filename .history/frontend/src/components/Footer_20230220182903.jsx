import React from "react";


const Footer = () => {
  return (
    <footer className="text-center d-flex flex-row">
      <span>
      <Nav className=" text-white w-100 pt-4">
            <Nav.Item className="m-3 ">
              <SocialIcon url="https://linkedin.com" className="me-2 social" style={{ height: 25, width: 25 }} />
              Linkedin
            </Nav.Item>
            <Nav.Item className="m-3 ">
              <SocialIcon url="https://github.com/" className="me-2 social" style={{ height: 25, width: 25 }} />
              Github
            </Nav.Item>
      </span>
      <span></span>
      <span>
        <p className=" pb-4 pt-4 mt-4 border footer text-white">&copy; {new Date().getFullYear()} Copyright: Hotels Finder</p>
      </span>
    </footer>
  );
};

export default Footer;
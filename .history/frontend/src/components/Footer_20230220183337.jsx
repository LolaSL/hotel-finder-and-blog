import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="footerborder ">
      {/* <span className="me-2">
    
        Linkedin
      </span>
      <span>
    
        Github
      </span> */}
      <span>
            <SocialIcon
          url="https://github.com/"
          className="me-2 social"
          style={{ height: 25, width: 25 }}
        />    <SocialIcon
          url="https://linkedin.com"
          className="me-2 social"
          style={{ height: 25, width: 25 }}
        />
        <p className=" pb-4 pt-4 mt-4  text-white">
          &copy; {new Date().getFullYear()} Copyright: Hotels Finder
        </p>
      </span>
    </footer>
  );
};

export default Footer;

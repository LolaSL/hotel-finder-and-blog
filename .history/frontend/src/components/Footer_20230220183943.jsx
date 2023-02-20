import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="footer border pb-4 pt-4 mt-4 flex-row">
      {/* <span className="me-2">
            <SocialIcon
          url="https://github.com/"
          className="me-2 social text-white bg-light rounded"
          style={{ height: 25, width: 25 }}
        />
        Linkedin
      </span>
      <span>
    
        Github
      </span> */}
      <span>
        <SocialIcon
          url="https://linkedin.com"
          className="me-2 social text-white bg-light rounded"
          style={{ height: 25, width: 25 }}
        />
        <p className="text-white">
          &copy; {new Date().getFullYear()} Copyright: Hotels Finder
        </p>
      </span>
    </footer>
  );
};

export default Footer;

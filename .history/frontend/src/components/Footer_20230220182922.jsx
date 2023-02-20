import React from "react";


const Footer = () => {
  return (
    <footer className="text-center d-flex flex-row">
      <span>

              <SocialIcon url="https://linkedin.com" className="me-2 social" style={{ height: 25, width: 25 }} />
              Linkedin
          
        
              <SocialIcon url="https://github.com/" className="me-2 social" style={{ height: 25, width: 25 }} />
              Github
       
      </span>
      <span></span>
      <span>
        <p className=" pb-4 pt-4 mt-4 border footer text-white">&copy; {new Date().getFullYear()} Copyright: Hotels Finder</p>
      </span>
    </footer>
  );
};

export default Footer;
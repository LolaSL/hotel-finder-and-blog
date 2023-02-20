import React from "react";


const Footer = () => {
  return (
    <footer className="footer border pb-4 pt-4 mt-4 flex-row">
      <span className="me-2">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Copyright: Hotels Finder
        </p>
      </span>
    </footer>
  );
};

export default Footer;

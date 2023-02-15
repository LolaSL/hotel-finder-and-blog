import React from "react";


const Footer = () => {
  return (
    <footer className="text-center">
      <span>
        <p className="fw-bold  pt-4 mt-4 border footer text-white">&copy; {new Date().getFullYear()} Copyright: Hotels Finder</p>
      </span>
    </footer>
  );
};

export default Footer;
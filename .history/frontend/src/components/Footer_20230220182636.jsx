import React from "react";


const Footer = () => {
  return (
    <footer className="text-center d-flex">
      <span></span>
      <span>
        <p className=" pb-4 pt-4 mt-4 border footer text-white">&copy; {new Date().getFullYear()} Copyright: Hotels Finder</p>
      </span>
    </footer>
  );
};

export default Footer;
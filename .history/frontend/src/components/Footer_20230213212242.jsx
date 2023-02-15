import React from "react";


const Footer = () => {
  return (
    <footer>
      <span>
        <p className="fw-bold pb-4 pt-4 mt-4 border bg-info text-white">&copy; {new Date().getFullYear()} Copyright: Hotels Finder</.>
      </span>
    </footer>
  );
};

export default Footer;
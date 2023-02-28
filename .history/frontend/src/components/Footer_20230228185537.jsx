import React from "react";


const Footer = () => {
  return (
    <footer className="footer border  pt-4 mt-4 ">
      <span className="me-2">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} Copyright: Hotel Finder and
        </p>
      </span>
    </footer>
  );
};

export default Footer;

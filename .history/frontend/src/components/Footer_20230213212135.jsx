import React from "react";


const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Footet"  className="logo-image"/>
      <span>
        <b>&copy; {new Date().getFullYear()} Copyright: Multi Nishe Blog</b>
      </span>
    </footer>
  );
};

export default Footer;
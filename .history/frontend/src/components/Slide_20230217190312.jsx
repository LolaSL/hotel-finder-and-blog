import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';


const Slide = () => {
  return (
    <div className="slide">
      {" "}
      <Helmet>
        <title>Israel guide</title>
      </Helmet>
      <div className="text-center slide-container mx-auto " style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }}>
        <img src="" alt="" className="img-thumbnail image rounded"/>
      <h1 className="slide-title mb-4 pt-4"> Israel travel guide</h1>
      <p className="p-4 mb-4">Complete guide for visiting Israel</p>
      <Link className="link slide-link border shadow p-4 fs-4 m-4">See more</Link>
      </div>
    </div>
  );
};

export default Slide;

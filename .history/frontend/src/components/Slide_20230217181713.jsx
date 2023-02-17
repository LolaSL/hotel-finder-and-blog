import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';


const Slide = () => {
  return (
    <div className="slide-container">
      {" "}
      <Helmet>
        <title>Israel guide</title>
      </Helmet>
      <div className="text-center">
      <h1 className="slide-title"> Israel travel guide</h1>
      <p>Complete tips for visiting Israel</p>
      <Link className="link slide-link border shadow p-4 fs-4">See more</Link>
      </div>
    </div>
  );
};

export default Slide;

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
      <h1 className="slide-title"> Israel travel guide</h1>
      <p>Complete tips for visiting Israel</p>
      <Link className="link slide-link bold ">See more</Link>
    </div>
  );
};

export default Slide;

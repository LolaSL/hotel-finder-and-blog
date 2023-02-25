import React from "react";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";

const Slide = () => {
  return (
    <Container className="slide">
      {" "}
      <div className="text-center slide-container mx-auto shadow img-thumbnail rounded">
      <h1 className="slide-title display-2 mb-4 pt-4"> Israel travel guide</h1>
      <p className="slide-paragraph p-4 mb-4 fw-bold">Complete guide for visiting Israel</p>
      <Link className="link text-white border fs-4 shadow p-2 rounded" to="/slide">See more</Link>
      </div>
      </Container>
   
  );
};

export default Slide;

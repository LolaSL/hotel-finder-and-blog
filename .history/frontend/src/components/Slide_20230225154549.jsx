import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import video1 from "./videos/video1.mp4";

const Slide = () => {
  return (
    <Container className="slide">
      {" "}
      {/* <div className="text-center slide-container mx-auto shadow img-thumbnail rounded"> */}
        <h1 className="slide-title display-2 mb-4 pt-4">
          {" "}
          Israel travel guide
        </h1>
        <figure className="position-relative ">
        <div className="embed-responsive embed-responsive-21by9">
          <video
            className="embed-responsive-item rounded d-flex"
            width="450"
            title="Waterfall"
            allowFullScreen
            autoPlay
            muted
            loop
            id="video"
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <figcaption className="p-4">
          <Link className="link text-white border fs-4 shadow p-2 rounded" to="/slide">
            {" "}
            See more
          </Link>
        </figcaption>
      </figure>
        <p className="slide-paragraph p-4 mb-4 fw-bold">
          Complete guide for visiting Israel
        </p>
   
      {/* </div> */}
    </Container>
  );
};

export default Slide;

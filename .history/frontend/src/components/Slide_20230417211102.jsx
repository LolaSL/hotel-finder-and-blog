import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import video1 from "./videos/video1.mp4";

const Slide = () => {
  return (
    <Container className="slide">
      {" "}
        <figure className="position-relative ">
        <div className="embed-responsive embed-responsive-21by9">
          <video
            className="embed-responsive-item rounded d-flex"
            width="450"
            title="Desert"
            allowFullScreen
            autoPlay
            muted
            loop
            id="video"
          >
            <source src={video1} type="video/mp4" />
            <source src={video1} type="video/webm" />
          </video>
        </div>
        <figcaption className="p-4">
          <Link className="link text-white border fs-4 shadow p-2 rounded" to="/slide">
            {" "}
            Complete guide for visiting Israel
          </Link>
        </figcaption>
      </figure>
    </Container>
  );
};

export default Slide;

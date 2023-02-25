import React from "react";
import Slide from "../components/Slide";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../components/NewsLetter";
import Container from "react-bootstrap/Container";
import video from "../components/videos/video.mp4";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const JourneyOfAllExperiences = () => {
  return (
    <Container className="container">
      <Helmet>
        <title>Journey Of All Experiences</title>
      </Helmet>
      <h1 className="font-weight-light display-1 text-center mb-4 mt-4">
        Journey Of All Experiences
      </h1>
      <h2 className="font-weight-light display-6 pb-4 text-center">
        Find inspiration for your next adventure, whether trekking through the
        jungle with an elephant or traversing the largest sand desert in the
        world. Let your imagination run wild.
      </h2>{" "}
      <figure className="position-relative ">
        <div className="embed-responsive embed-responsive-21by9">
          <video
            className="embed-responsive-item rounded d-flex"
            width="450"
            title="Desert adventures"
            allowFullScreen
            autoPlay
            muted
            loop
            id="video"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <figcaption className="p-4"><Button className>
          <Link className="link text-white" to="/places">
            {" "}
            Start exploring
          </Link></Button>
        </figcaption>
      </figure>
      <section>
        <article className=" font-weight-light article mt-4 mb-4">
          Sprinkle a dash of novelty on your festivities and embrace the
          opportunity to celebrate more than just the holiday season this year.
        </article>
        <Slide />
        <article className="font-weight-light article mt-4 mb-4">
          In our fast-paced world there is no greater gift than the memories
          that you create, and the places that you create them. Take the time to
          indulge in unique customs, inspiring cuisine and breathtaking scenery.
          Embark on a magical journey as you reconnect with loved ones in the
          most storied destinations this holiday season. Find out the places
          that matter.
        </article>
      </section>
      <section>
        <div>
          <img
            src="./images/17.jpg"
            alt="Tourist tips"
            className="img-fluid  rounded mx-auto d-block shadow"
          />
        </div>
        <article className="font-weight-light article mt-4 mb-4">
          Are you thinking about taking some time off and organizing a lovely
          trip somewhere you have never been before? If so you will see that
          there will be many things that you have to take in consideration when
          doing so. Surely what you want is to organize the perfect trip:
          somewhere amazing and for a good price. The secret is to be strategic
          and think about each and every detail carefully. Here we give you 15
          tricks for you to choose the perfect hotel. We can assure you that by
          following these tips you will find the perfect accommodation and save
          some extra money.
        </article>
      </section>
      <NewsLetter />
    </Container>
  );
};

export default JourneyOfAllExperiences;

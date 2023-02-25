import React from "react";
import Slide from "../components/Slide";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../components/NewsLetter";
import Container from "react-bootstrap/Container";
import video from "../components/videos/video.mp4";
import { Link } from "react-router-dom";

const JourneyOfAllExperiences = () => {
  return (
    <Container className="container">
      <Helmet>
        <title>Journey Of All Experiences</title>
      </Helmet>
      <h1 className="font-weight-light display-1 text-center mb-4 mt-4">
        Journey Of All Experiences
      </h1>
      <h2 className="font-weight-light display-6 pb-4 second-title">
        Find inspiration for your next adventure. Let your imagination run wild.
      </h2>
      <article className=" font-weight-light article mt-4 mb-4">
        In our fast-paced world there is no greater gift than the memories that
        you create, and the places that you create them. Take the time to
        indulge in unique customs, inspiring cuisine and breathtaking scenery.
        Embark on a magical journey as you reconnect with loved ones in the most
        storied destinations this holiday season. Find out the places that
        matter.
      </article>
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
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <figcaption className="p-4">
          <Link
            className="link text-white border fs-4 shadow p-2 rounded"
            to="/places"
          >
            Start exploring
          </Link>
        </figcaption>
      </figure>
      <section>
        <h3 className="font-weight-light  pb-4 second-title">
          Sprinkle a dash of novelty on your festivities and embrace the
          opportunity to celebrate more than just the holiday season this year.
          Pay visit to Israel!
        </h3>
        <Slide />
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
      <section>
        <div>
          <Link to="/tips">
            <img
              src="./images/17.jpg"
              alt="Tourist tips"
              className="img-fluid  rounded mx-auto d-block shadow"
            />
          </Link>
        </div>
        <article className=" font-weight-light article mt-4 mb-4">
          When it comes to traveling, whether for pleasure or business, finding
          the right motel, with the right amenities, and in the right location
          may be a difficult task even for the most seasoned travelers. While
          some people choose hotels that are located far away from the citys
          hustle and bustle, others choose hotels that are located right in the
          citys core. As a result, lodging selection is heavily influenced by
          personal tastes. Please find a few general suggestions to keep in mind
          when booking a motel.
        </article>
        <div className="mb-4">
          <Link to="/hotel-tips">
            <img
              src="./images/66.jpg"
              alt="Tourist tips"
              className="img-fluid  rounded mx-auto d-block shadow"
            />
          </Link>
        </div>
      </section>
      <NewsLetter />
    </Container>
  );
};

export default JourneyOfAllExperiences;

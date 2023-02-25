import React from "react";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";

const HotelTips = () => {
  return (
    <Container className="container">
      <Helmet>
        <title>Tips to find hotel</title>
      </Helmet>

      <h1 className="font-weight-light display-1 text-center mt-4 mb-4 p-2">
        The tips to find hotel
      </h1>
      <section>
        <article>
          When it comes to traveling, whether for pleasure or business, finding
          the right motel, with the right amenities, and in the right location
          may be a difficult task even for the most seasoned travelers. While
          some people choose hotels that are located far away from the citys
          hustle and bustle, others choose hotels that are located right in the
          citys core. As a result, lodging selection is heavily influenced by
          personal tastes. Please find a few general suggestions to keep in mind
          when booking a motel.
        </article>
      </section>
      <section>
        <h2 className="mt-2 mb-2 display-6  mt-4 mb-4">1. Examine Hotel Reviews</h2>
        <div className="mb-4 mt-4">
          <img
            src="./images/57.jpg"
            alt="Winter"
            className="img-thumbnail image rounded mx-auto d-block"
          />
        </div>
        <article>
           Make certain the resort you choose has a good
          reputation. Make certain to read genuine visitor reviews. The fact
          that majority of visitors like to read reviews prior to making a hotel
          reservation. When you are looking for a fantastic location, reviews are
          readily available. Analyzing reviews about different hotels provides
          you with valuable insight.
        </article>
      </section>
    </Container>
  );
};

export default HotelTips;

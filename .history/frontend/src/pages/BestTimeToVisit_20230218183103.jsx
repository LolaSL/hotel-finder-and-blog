import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Menu from "../components/Menu";

const BestTimeToVisit = () => {
  return (
    <div className="d-flex slide">
      <Helmet>
        <title>The Best Time to Visit Israel</title>
      </Helmet>
      <Container className="container">
        <h1 className="font-weight-light display-1 text-center mt-4 mb-4">
        The Best Time to Visit Israel
        </h1>
        <section className="d-block juctify-content-center">
          <div className="mb-4 mt-4">
            <img
              src="./images/36.jpg"
              alt="Tel-Aviv promenad"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
          The best time to visit Israel is typically in the spring (March to May) or during the fall (September to November). At these times, you'll likely find fewer crowds, cheaper accommodations, and the best weather (even for hitting the beach). Summer is the most popular and therefore the most crowded, but it can often be extremely hot and unpleasant.

Whenever you decide to go, use this guide to help plan your trip to this tiny but fascinating country known for its rich culture, fascinating history, stunning beaches, and eclectic food.
          </article>
        </section>
      </Container>
      <Menu />
    </div>
  );
};

export default BestTimeToVisit;

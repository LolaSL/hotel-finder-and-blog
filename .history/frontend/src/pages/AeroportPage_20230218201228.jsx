import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

const AeroportPage = () => {
  return (
    <div className="d-flex slide">
      <Helmet>
        <title>Ben Gurion Airport</title>
      </Helmet>
      <Container className="container">
        <h1 className="font-weight-light display-1 text-center mt-4 mb-4">
          Ben Gurion Airport
        </h1>
        <section className="d-block juctify-content-center">
          <div className="mb-4 mt-4">
            <img
              src="./images/46.jpg"
              alt="Ben Gurion Airport"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Visitors traveling to Jerusalem, Tel Aviv, or any of Israels other
            popular locales will fly into the country busiest and biggest
            airport, Ben Gurion Airport, named after the first Prime Minister.
            (Ramon Airport, the second largest in southern Israel, serves
            civilian traffic and operates as a diversion airport.) Also known as
            Tel Aviv Airport or Natbag, Ben Gurion Airport is located in the
            city of Lod, 28 miles northwest of Jerusalem and 12 miles southeast
            of Tel Aviv. A hub for El Al Israel Airlines, Israir Airlines,
            Arkia, and Sun D"Or, this airport is counted in the top five best
            airports in the Middle East due to security and passenger experience
            (you will notice armed Israel Police officers, Israel Defense
            Forces, and Israel Border Police as you make your way through the
            airport). Terminals 1 and 3 are the main gateways for passengers
            flying in and out of Israel, though the latter is mostly for
            domestic travel. Keep reading to learn more about the airport's
            amenities, public transportation to and from the airport, and other
            must-know tidbits.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              Ben Gurion Airport Code, Location, and Contact Information
            </h2>
            <img
              src="./images/47.jpg"
              alt="Aeroport contact information"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Ben Guiron Airport Code: TLV
          </article>
          <article className="font-weight-light">
            Location: 7015001, Israel
          </article>
          <article className="font-weight-light">
            Website: <Link to=" https://www.iaa.gov.il/en/" className=""></Link>
          </article>
          <article className="font-weight-light"></article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">j</h2>
            <img
              src="./images/.jpg"
              alt="Tel-Aviv Yaffa"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light"></article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">j</h2>
            <img
              src="./images/.jpg"
              alt="Tel-Aviv Yaffa"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light"></article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">u</h2>
            <img
              src="./images/.jpg"
              alt="Tel-Aviv Yaffa"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light"></article>
        </section>
      </Container>
      <Menu />
    </div>
  );
};

export default AeroportPage;

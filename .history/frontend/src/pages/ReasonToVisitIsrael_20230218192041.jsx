import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Menu from "../components/Menu";

const ReasonToVisitIsrael = () => {
  return (
    <div className="d-flex slide">
      <Helmet>
        <title>Reasons to Visit Israel</title>
      </Helmet>
      <Container className="container">
        <h1 className="font-weight-light display-1 text-center mt-4 mb-4">
          Reasons to Visit Israel
        </h1>
        <section className="d-block juctify-content-center">
          <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
            Amazing things happen.
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/39.jpg"
              alt="Tel-Aviv promenad"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>

          <article className="font-weight-light">
            By any measure a tiny country, Israel never fails to beguile.
            Jerusalem is the official capital and holy city to three world
            religions, Judaism, Christianity, and Islam, while Tel Aviv brims
            with beaches and bustles with urban vitality. Then there is the Dead
            Sea and Masada, the stark, stunning Negev, and fertile Galilee. The
            number of museums and cultural institutions per relative area is
            larger in Israel than anywhere in the world
          </article>
        </section>
      </Container>
      <Menu />
    </div>
  );
};
export default ReasonToVisitIsrael;

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
              alt="Amazing things happen."
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
            larger in Israel than anywhere in the world.
          </article>
          <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
          Religious Experience
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/40.jpg"
              alt="    Religious Experience"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Jerusalem is home to major sites of religious significance and
            pilgrimage, including the Temple Mount, Western Wall, the Church of
            the Holy Sepulchre, Dome of the Rock, and al-Aqsa Mosque. But
            regardless of ones religious views and the connections that many
            feel when visiting the Holy Land, the overriding spiritual energy of
            Jerusalem is something unique for everyone to experience. The Yad
            Vashem Holocaust memorial is an essential stop for any visitor.
            Safed is the cradle of Jewish mysticism, and you can retrace
            Christs footsteps along the shores of the Sea of Galilee.
                  </article>
                  <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
                  <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
          Religious Experience
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/40.jpg"
              alt="Tel-Aviv promenad"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Jerusalem is home to major sites of religious significance and
            pilgrimage, including the Temple Mount, Western Wall, the Church of
            the Holy Sepulchre, Dome of the Rock, and al-Aqsa Mosque. But
            regardless of ones religious views and the connections that many
            feel when visiting the Holy Land, the overriding spiritual energy of
            Jerusalem is something unique for everyone to experience. The Yad
            Vashem Holocaust memorial is an essential stop for any visitor.
            Safed is the cradle of Jewish mysticism, and you can retrace
            Christs footsteps along the shores of the Sea of Galilee.
          </article>
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/40.jpg"
              alt="Tel-Aviv promenad"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Jerusalem is home to major sites of religious significance and
            pilgrimage, including the Temple Mount, Western Wall, the Church of
            the Holy Sepulchre, Dome of the Rock, and al-Aqsa Mosque. But
            regardless of ones religious views and the connections that many
            feel when visiting the Holy Land, the overriding spiritual energy of
            Jerusalem is something unique for everyone to experience. The Yad
            Vashem Holocaust memorial is an essential stop for any visitor.
            Safed is the cradle of Jewish mysticism, and you can retrace
            Christs footsteps along the shores of the Sea of Galilee.
          </article>
        </section>
      </Container>
      <Menu />
    </div>
  );
};
export default ReasonToVisitIsrael;

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
              alt="Religious Experience"
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
            Safed is the cradle of Jewish mysticism, and you can retrace Christs
            footsteps along the shores of the Sea of Galilee.
          </article>
          <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
            Israel's Natural Wonders
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/41.jpg"
              alt="Israel's Natural Wonders"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            For many, the Mediterranean coast is itself a wonder, with many
            unspoiled beaches despite their proximity to cities. But away from
            the coast, the country diversity truly astounds: in the south, there
            is the vast crater-strewn emptiness of the Negev Desert, while to
            the east, the Dead Sea beckons with the saltiest body of water on
            earth and, at 1,388 feet below sea level, the lowest elevation on
            the surface of the planet. In the north, where the Galilee region
            surprises with its green hills and valleys that (in winter) are a
            major crossroads for migratory birds and form the heart of the
            renowned Israeli wine country.
          </article>
          <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
            Cosmopolitan Tel Aviv
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/42.jpg"
              alt="Cosmopolitan Tel Aviv"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            While many people associate Jerusalem most closely with Israel, Tel
            Aviv is the country's answer to Manhattan and the beating heart of
            its culinary, cultural and nightlife scene. It's also a beach town
            clean beaches run the length of the city meaning there is a unique
            mix of sophistication and relaxation here. The ancient city of Jaffa
            provides an atmospheric counterpoint to Tel Aviv soaring towers and
            famous curved white Bauhaus buildings, a legacy of the 1930s.
          </article>
          <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
            Great Desert Adventures
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/43.jpg"
              alt="Great Desert Adventures"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
          Israel's Negev is a visual sight to behold, its stark desert relief home to an infinite variety of beautiful views. And eco-tourism and desert adventure touring options abound, from hiking and biking along desert trails to all-terrain jeep trips, camel rides along the ancient frankincense route, rock climbing, and rappelling. There is also a great range of modern guest cabins and inns, as well as unique spas, to unwind in after a day of desert exploration.
          </article>
        </section>
      </Container>
      <Menu />
    </div>
  );
};
export default ReasonToVisitIsrael;

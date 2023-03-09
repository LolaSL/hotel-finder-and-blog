import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Menu from "../components/Menu";

const ReasonToVisitIsrael = () => {
  return (
    <div className="d-flex slide-page">
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
              alt="Jerusalem Ben Ehuda Street "
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light article mt-4 mb-4">
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
              alt="Religious Quater"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light article mt-4 mb-4">
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
              alt="Timna Park"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light article mt-4 mb-4">
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
              alt="Tel Aviv Marina"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light article mt-4 mb-4">
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
              alt="Negev Desert"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light article mt-4 mb-4">
            Israel's Negev is a visual sight to behold, its stark desert relief
            home to an infinite variety of beautiful views. And eco-tourism and
            desert adventure touring options abound, from hiking and biking
            along desert trails to all-terrain jeep trips, camel rides along the
            ancient frankincense route, rock climbing, and rappelling. There is
            also a great range of modern guest cabins and inns, as well as
            unique spas, to unwind in after a day of desert exploration.
          </article>
          <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
            Archaeological Sites
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/44.jpg"
              alt="Archaeological Site"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light article mt-4 mb-4">
            With a cultural past that stretches back to even before biblical
            times, Israel has a rich array of ancient sites that are easy to
            explore. One of the most famous is Masada, the mountainous
            stronghold at the edge of the Judean desert where Jews tried to fend
            off the ancient Romans. There are stunning Roman ruins in Caesarea
            (some of which can be even be seen on an underwater tour), Crusader
            ramparts in Akko, the ancient Western Wall in Jerusalem, St. Mary
            Well in Nazareth and so much more and new discoveries are being made
            all the time.
          </article>
          <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
            Delicious Israeli Cuisine
          </h2>
          <div className="mb-4 mt-4">
            <img
              src="./images/45.jpg"
              alt="Delicious Israeli dishes"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            It is not called the Land of Milk and Honey for nothing! Thanks to
            its Mediterranean climate and agricultural ingenuity, Israel grows
            an amazing array of organic produce that finds its way into fresh
            market cuisine that you will find served throughout the country.
            Because it is a crossroads country, there are infinite varieties of
            food and restaurants, from Jewish Yemenite to Druze, Palestinian to
            Turkish to trendy New Israeli restaurants that take reservations
            weeks in advance.
          </article>
        </section>
      </Container>
      <Menu />
    </div>
  );
};
export default ReasonToVisitIsrael;

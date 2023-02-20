import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Menu from "../components/Menu";

const WheatherAndClimate = () => {
  return (
    <div className="d-flex slide">
      <Helmet>
        <title>Weather in Israel</title>
      </Helmet>
      <Container className="container">
        <h1 className="font-weight-light display-1 text-center mt-4 mb-4">
          Weather in Israel: Climate, Seasons and Average Monthly Temperature
        </h1>
        <section className="d-block juctify-content-center">
          <div className="mb-4 mt-4">
            <img
              src="./images/37.jpg"
              alt="Tel-Aviv promenad"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            For such a small country, Israel is very diverse in terms of
            geography. In the north, you’ll see mountains, some of which are
            snow-capped, and in the south, you'll find desert landscapes (the
            Negev and Judean deserts make up more than half of Israel’s total
            landmass). Add in three seas, central Israel’s Judean Hills, and
            coastal plains, and you’ll begin to understand how this little
            country can be incredibly varied in terms of weather. 
          </article>
          <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
            Peak Season in Israel
          </h2>
          <article className="font-weight-light">
            Despite the often oppressive heat, summer (July and August) is still
            the most popular time for tourists to visit Israel, and prices
            usually reflect that. The week of Passover in the spring is probably
            the next-most popular time to visit. With schools, workplaces, and
            many government offices closed for the entire week, attractions,
            beaches, hotels, and restaurants can get quite crowded and
            expensive. Book early the trip to Israel if you plan to come during
            Passover.
          </article>
        </section>
      </Container>
      <Menu />
    </div>
  );
};
export default WheatherAndClimate;

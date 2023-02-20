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
            geography. In the north, you will see mountains, some of which are
            snow-capped, and in the south, you'll find desert landscapes (the
            Negev and Judean deserts make up more than half of Israel total
            landmass). Add in three seas, central Israel Judean Hills, and
            coastal plains, and you will begin to understand how this little
            country can be incredibly varied in terms of weather. Israel is
            considered to have a Mediterranean climate with hot and dry summers
            and cool and wet winters. The start of the year is the chilliest
            with average daily temperatures in January settling between 43 and
            60 degrees F (6 to 16 degrees C). In the summer, July and August are
            typically the hottest months with average across-the-country
            temperatures between 72 and 91 degrees F (22 and 33 degrees C).
            Depending on where you are at in the country, along the coast, in the
            desert, or in the highlands, the weather varies, however.
          </article>
          <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
            Peak Season in Israel
          </h2>
          <article className="font-weight-light">
   
          </article>
        </section>
      </Container>
      <Menu />
    </div>
  );
};
export default WheatherAndClimate;

import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Menu from "../components/Menu";
import moment from "moment";

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
            Website:
            <a
              href="http://www.iaa.gov.il/en"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              https://www.iaa.gov.il/en
            </a>
          </article>
          <article className="font-weight-light">
            Flight tracker:
            <a
              href="https://www.iaa.gov.il/en/airports/ben-gurion/flight-board/"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              https://www.iaa.gov.il/en/airports/ben-gurion/flight-board/
            </a>
          </article>
          <article className="font-weight-light">
            Phone number: +972 03-9723333
          </article>
          <article className="font-weight-light">
            The four levels of the airport are: Level 3 for departing
            passengers, level 2 for public transportation, level G for arriving
            passengers, and level S for the train station.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              Before flight
            </h2>
            <img
              src="./images/48.jpg"
              alt="Before flight"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Built in the 1930s by the British Mandate, this airport saw major
            changes in the 1970s when Israel Airport Authorities (IAA) took
            control. By the 1990s, airport traffic was so busy that in 2004,
            Terminal 3 was created to accommodate the more than 25 million
            international passengers. Meanwhile, Terminal 2 served domestic
            flights until 2007 before it was removed entirely. Terminal 1, the
            old terminal, serves domestic flights and low-cost European
            international flights. Terminals 1 and 3 are connected through a
            complimentary shuttle bus. It is important to note that the security
            at Ben Gurion Airport may take longer than what you have experienced
            at other international airports due to ongoing tensions that Israel
            has had to face over the decades. It is advised to arrive at the
            airport a minimum of three hours prior to international travel to be
            safe, especially during Jewish holidays or peak times. You can
            expect to go through multiple check points, be asked security
            questions, and have your luggage examined. When passing through
            passport security, please note that you will be given a stamp on a
            small piece of paper in lieu of a passport book stamp. You will need
            to keep this piece of stamped paper safe and secure for the duration
            of your time in Israel. To avoid long wait times at security,
            passport control, and luggage screenings, you can book the VIP
            Departure Assistance or VIP Arrival Assistance services, which will
            expedite the process and include an airport steward to walk you
            through the airport security.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              Ben Gurion Airport Parking
            </h2>
            <img
              src="./images/49.jpg"
              alt="Ben Gurion Airport Parking"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Short and long-term parking are both available at the airport, and
            can be purchased with a credit card or Israeli currency. For
            passengers flying through <strong>Terminal 1</strong>, you can park
            directly in front of the terminal, while those flying through{" "}
            <strong>Terminal 3</strong> can find parking in the Vineyard and
            Orchard lots.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              Renting the car
            </h2>
            <img
              src="./images/50.jpg"
              alt="Renting the car"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Navigation systems can direct you to the airport and its parking
            lots if you are in a private vehicle. Likely, you will be traveling
            throughout Israel on a private tour that will include transportation
            to and from the airport. At the airport, you will also have access
            to car rental agencies: Avis, Budge, Dollar, Eldan, Hertz, and Sixt.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              Public Transportation and Taxi
            </h2>
            <img
              src="./images/51.jpg"
              alt="Railway Train"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Metropoline and Egged are the bus services that accommodate
            passengers for arrival and departures at the airport. For Egged,
            select the Ben Gurion Airport as your destination, choose your
            preferred timing, and the website will let you know which line to
            take as well as where it is located. Israel Railways, with multiple
            lines and stations, is a popular option for getting from the airport
            to destinations in Israel. Located on level S at the airport, the
            train is easily accessible and simple to find. Situated at Terminal
            3, licensed taxis can take you anywhere you want to go. At the exit,
            from gate 24, taxi stands are available on the ground floor. A
            complimentary shuttle service is also available for transportation
            between Terminals 1 and 3.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              Where to Eat and Drink
            </h2>
            <img
              src="./images/52.jpg"
              alt="La Farina Cafe"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Terminal 3 is where most of the restaurants and cafés are located,
            all of which are kosher. Tables and seating are available in the
            center of the circular building, with shops and dining linked around
            the outside. For Italian food and drinks, visit Ilans, where
            vegetarians and vegans will find plenty of options. La Farina offers
            pastas, pizzas, sandwiches, and baked goods as well as coffee, teas,
            and cold take-away drinks. For German-style noshes and beverages,
            including meat, visit Bayern Market. A McDonalds, as well as other
            fast-food options, are part of the Food Court. Café Café, located in
            Terminal 1, is where to go for a quick bite to eat. Here, you will
            find pastries, coffee, sandwiches, and complimentary WiFi.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              Where to Shop
            </h2>
            <img
              src="./images/53.jpg"
              alt="James Richardson Duty Free"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Terminal 3, in the Departures hall, is home to many souvenir shops
            and boutiques: James Richardson Duty Free, Sweets Market, Duty Free
            Sport, Toys Sakal, Steimatzky Souvenirs, Chocolate and More, and
            Emporium. Popular items to purchase are Dead Sea salts and bath
            products as well as religious trinkets, jewelry, artworks, and
            books. Hummus, dates, and olive oil are prevalent food products
            purchased as mementos, too. Credit cards and Israeli cash are
            accepted. Keep in mind that when Israel is observing high holidays,
            the airport will be more crowded. You can expect lines in the shops
            and at the restaurants during these observed dates.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              Airport Lounges
            </h2>
            <img
              src="./images/54.jpg"
              alt="Airport VIP Lounge "
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Terminal 3, inside security, has four lounges. Dan Lounge, which
            serves all airlines and alliances (apart from El Al), has locations
            in each concourse. Meanwhile, King David Lounge serves El Al
            passengers and frequent flyers. Day passes and annual memberships
            are available.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              WiFi and Charging Stations
            </h2>
            <img
              src="./images/55.jpg"
              alt="WiFi Charging Station"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            Free WiFi is available everywhere, and all of the concourses have
            charging stations. Keep in mind that electric outlets are 220 volts,
            50Hz; and two-pronged European-style round or three-pronged plugs
            are used.
          </article>
          <div className="mb-4 mt-4">
            <h2 className="font-weight-light display-4 text-center mt-4 mb-4">
              Ben Gurion Airport Tips & Facts
            </h2>
            <img
              src="./images/56.jpg"
              alt="Ben Gurion Airport service"
              className="img-thumbnail image rounded mx-auto d-block"
            />
          </div>
          <article className="font-weight-light">
            There are two synagogues in Terminal 3: one in the Greeter’s hall
            and one in the Duty Free hall. They operate 24 hours per day.
          </article>
          <article className="font-weight-light">
            A Muslim and Christian prayer room is located in the Departure’s
            hall in concourse E.
          </article>
          <article className="font-weight-light">
            Luggage may be stored in one of the three stands on the G floor in
            both Vineyard and Orchard parking lots as well as in the Departures
            hall in concourse B.
          </article>
          <article className="font-weight-light">
            Nursing booths with chairs, diaper changing areas, a hot and cold
            water bar, a microwave, and a crib are available for families. For
            older kids, play areas are accessible in concourses B, C, and D in
            the Departure hall.
          </article>
          <article className="font-weight-light">
            Paid porter service is available.
          </article>
          <article className="font-weight-light">
            Senior citizens, aged 80 and up, may move to the front of the line
            for both security and flight check-ins. Follow the signs to navigate
          </article>
          <p className="created_at">
            Created {moment.format("YYYY-MM-DD HH:mm:ss")}
          </p>
        </section>
      </Container>
      <Menu />
    </div>
  );
};

export default AeroportPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PlaceFinder from "../apis/PlaceFinder";



const Place = () => {
  // const { id } = useParams();
  const [place, setPlace] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await PlaceFinder.get("/");
      setPlaces(data);
    }
    fetchData();
  }, []);

  if (!places) {
    return (
      <section>
        <h2>Place not found!</h2>
      </section>
    );
  }

  return (
    <Card className="shadow border">
      <img src={places.image_url1} className="card-img" alt={places.title} />

      <Card.Body>
        <Card.Title> {places.title}</Card.Title>

        <Card.Text>{places.description}</Card.Text>
        <Link to={`/place/:id`}>
          <Button>View more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Place;

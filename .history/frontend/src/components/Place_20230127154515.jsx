import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PlaceFinder from "../apis/PlaceFinder";
import { getPlaces } from "../../../backend/controllers/place";


const Place = () => {
  // const { id } = useParams();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await PlaceFinder.get();
      setPlaces(data);
    }
    fetchData();
  }, []);

  if (!getPlaces) {
    return (
      <section>
        <h2>Place not found!</h2>
      </section>
    );
  }

  return (
    <Card className="shadow border">
      <img src={places.image_url1} className="card-img" alt={place.title} />

      <Card.Body>
        <Card.Title> {place.title}</Card.Title>

        <Card.Text>{place.description}</Card.Text>
        <Link to={`/place/:id`}>
          <Button>View more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Place;

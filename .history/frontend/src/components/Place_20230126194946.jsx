import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from 

const Place = (places) => {
  const addToCartHandler = async (item) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
  }
  return (
    <Card className="shadow border">
      <Link to={`/place/:id`}>
        <img src={places.image_url1} className="card-img" alt={places.title} />
      </Link>
      <Card.Body>
        <Link to={`/place/:id`}>
          <Card.Title> {places.title}</Card.Title>
        </Link>
        <Card.Text>{places.description}</Card.Text>
        <Link to={`/place/:id`}><Button >View more</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Place;

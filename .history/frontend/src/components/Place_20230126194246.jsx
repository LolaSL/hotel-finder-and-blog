import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Place = (props) => {
  
  return (
    <Card className="shadow border">
      <Link to={`/place/${id}`}>
        <img src="place.image_url" className="card-img" alt="Holland in spring" />
      </Link>
      <Card.Body>
        <Link to={`/place/${id}`}>
          <Card.Title> {place.title}</Card.Title>
        </Link>
        <Card.Text>{place.description}</Card.Text>
        <Link to={`/place/${id}`}><Button >View more</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Place;

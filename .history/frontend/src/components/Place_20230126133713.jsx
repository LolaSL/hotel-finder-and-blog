import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Place = (props) => {
  const { place, id, title, } = props;

  
  return (
    <Card className="shadow border">
      <Link to={`/place/${id}`}>
        <img src="" className="card-img" alt="" />
      </Link>
      <Card.Body>
        {" "}
        <Link to={`/place/${id}`}>
          <Card.Title> {place.title}</Card.Title>
        </Link>

        <Card.Text>${place.description}</Card.Text>
    
          <Button >View more</Button>
      </Card.Body>
    </Card>
  );
};

export default Place;

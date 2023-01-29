import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Place = (props) => {
  const {  id, title, description} = props;

  
  return (
    <Card className="shadow border">
      <Link to={`/place/${id}`}>
        <img src="/images/16.jpg" className="card-img" alt="" />
      </Link>
      <Card.Body>
        {" "}
        <Link to={`/place/${id}`}>
          <Card.Title> {title}</Card.Title>
        </Link>

        <Card.Text>{description}</Card.Text>
    
          <Button >View more</Button>
      </Card.Body>
    </Card>
  );
};

export default Place;

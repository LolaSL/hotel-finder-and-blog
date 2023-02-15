import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Product = (props) => {
  const { place} = props;

  
  return (
    <Card className="shadow border">
      <Link to={`/place/${place.slug}`}>
        <img src="" className="card-img" alt="" />
      </Link>
      <Card.Body>
        {" "}
        <Link to={`/place/${place.slug}`}>
          <Card.Title> {place.title}</Card.Title>
        </Link>

        <Card.Text>${place={.}}</Card.Text>
    
          <Button >View more</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Product = (props) => {
  const { place} = props;

  
  return (
    <Card className="shadow border">
      <Link to={`/place/${place.slug}`}>
        <img src={product.image} className="card-img" alt={product.name} />
      </Link>
      <Card.Body>
        {" "}
        <Link to={`/product/${product.slug}`}>
          <Card.Title> {product.name}</Card.Title>
        </Link>

        <Card.Text>${product.price}</Card.Text>
    
          <Button >View more</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;

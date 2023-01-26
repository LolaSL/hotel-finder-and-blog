import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Product = (props) => {
  const { product } = props;

  
  return (
    <Card className="shadow border">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img" alt={product.name} />
      </Link>
      <Card.Body>
        {" "}
        <Link to={`/product/${product.slug}`}>
          <Card.Title> {product.name}</Card.Title>
        </Link>

        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="secondary fw-bold" disabled>
            Out of stock
          </Button>
        ) : (
          <Button >Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;

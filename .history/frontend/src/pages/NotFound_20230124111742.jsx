import React from 'react';
import Container from "react-bootstrap/Container";

const NotFound = () => {
  return (
    <Container className="container display-6 pt-4">
    <div id="error-page text-center ">
    <h1 className="text-danger text-uppercase pt-4 mb-6">Oops! 404 Page not found...</h1>
    <p className="text-danger pt-4 mb-6">Sorry, an unexpected error has occurred.</p>
      </div>
    </Container>
  )
}

export default NotFound;
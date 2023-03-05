
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
  return (
    <Spinner animation="border" role="status" className="color-primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
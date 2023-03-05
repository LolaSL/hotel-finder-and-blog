
import React from 'react';
import Spinner from 'react-bootstrap/Spenner';

export default function Loader() {
  return (
    <Rings animation="border" role="status" className="color-primary">
      <span className="visually-hidden">Loading...</span>
    </Rings>
  );
}
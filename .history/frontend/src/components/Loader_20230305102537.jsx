import Rings from 'react-bootstrap/Rings';
import React from 'react'
export default function Loader() {
  return (
    <Rings animation="border" role="status" className="color-primary">
      <span className="visually-hidden">Loading...</span>
    </Rings>
  );
}
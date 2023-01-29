import React from 'react'
import { useParams } from "react-router-dom";



const PlaceDetail = (props) => {
  const { place } = props;
  return (
    <div>
      <h1>{place.title}</h1></div>
  )
}

export default PlaceDetail
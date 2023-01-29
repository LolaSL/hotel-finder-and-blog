import React from 'react'
import { useParams } from "react-router-dom";



const PlaceDetail = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  return (
    <div>
      <h1>{place.title}</h1>
    </div>
  )
}

export default PlaceDetail
import React, {useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import { PlaceContext } from '../context/PlaceContext';
import Placef


const PlaceDetail = (props) => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  const { selectedPlace, setSelectedPlace } = useContext(PlaceContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PlaceFinder.get(`/${id}`);
        console.log(response);
        setSelectedPlace(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id, setSelectedHotel]);
  return (
    <div>
      <h1>{place.title}</h1>
    </div>
  )
}

export default PlaceDetail
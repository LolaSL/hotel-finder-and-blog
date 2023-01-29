import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import PlaceFinder from '../apis/PlaceFinder';



const PlaceDetail = (props) => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const { data: place } = await PlaceFinder('/id')
      setPlase(place);
      setIsLoading(false);
    }
    fetchData();
  }, [id]);
  return (
    <div>
      <h1>{place.title}</h1>
    </div>
  )
}

export default PlaceDetail
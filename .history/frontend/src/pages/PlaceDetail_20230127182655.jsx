import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import PlaceFinder from '../apis/PlaceFinder';



const PlaceDetail = (props) => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  const { selectedHotel, setSelectedHotel } = useContext(HotelsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HotelFinder.get(`/${id}`);
        console.log(response);
        setSelectedHotel(response.data.data);
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
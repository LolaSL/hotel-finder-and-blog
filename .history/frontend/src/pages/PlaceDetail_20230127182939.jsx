import React, {useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import { PlaceContext } from '../context/PlaceContext';
import PlaceFinder from '../apis/PlaceFinder';


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
  }, [id, setSelectedPlace]);
  return (
    <Container className="container">
    <div>
      {selectedPlace && (
        <>
          <h1 className="text-center display-1">{selectedPlace.hotel.name}</h1>
          <div className="text-center">
        
      
          </div>
          <div className="mt-3">
           
          </div>
          <AddReview />
        </>
      )}
      </div>
    </Container>
  )
}

export default PlaceDetail
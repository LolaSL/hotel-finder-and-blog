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
      {selectedHotel && (
        <>
          <h1 className="text-center display-1">{selectedHotel.hotel.name}</h1>
          <div className="text-center">
            <StarRating rating={selectedHotel.hotel.average_rating} />
            <span className="count ml-1">
              {selectedHotel.hotel.count
                ? `(${selectedHotel.hotel.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedHotel.reviews} />
          </div>
          <AddReview />
        </>
      )}
      </div>
    </Container>
  )
}

export default PlaceDetail
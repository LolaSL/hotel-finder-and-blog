import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HotelsContext } from "../context/HotelsContext";
import HotelFinder from "../apis/HotelFinder";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";

const HotelDetail = () => {
  const { id } = useParams();
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
    <Container className="container">
      <Helmet>
        <title>Hotel review</title>
      </Helmet>
      <div>
        {selectedHotel && (
          <>
            <h1 className="text-center display-1">
              {selectedHotel.hotel.name}
            </h1>
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
  );
};

export default HotelDetail;

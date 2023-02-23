import React, {useState} from "react";
import StarRating from "./StarRating";
import HotelFinder from "../apis/HotelFinder";


const Reviews = ({ reviews }) => {
  const [reviews, setReviews] = useState();
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await HotelFinder.delete(`/${id}`);
      setReviews(
       reviews.filter((hotel) => {
          return hotel.id !== id;
        })
      );
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (

    <div className="row row-cols-3 mb-2 d-flex p-4 ">
      {reviews.map((review) => {
        return (
          <div
            key={ review?.id}
            className="card-review text-white shadow mb-3 mr-2 me-2 rounded p-2"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header  d-flex justify-content-between">
              <span> {review?.name}</span>
              <span>
                <StarRating rating={ review?.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text"> {review?.review}</p>
            </div>
            <button type="submit" className="btn"
                onClick={(e) => handleDelete(e, review.id)}
            ></button>
          </div>
        );
      })}
      </div>

  );
};

export default Reviews;
import React from "react";
import StarRating from "./StarRating";
import { useSelector } from 'react-redux';


const Reviews = ({ reviews, userId }) => {
  constostAuthor = ({ userId }) => {
    const author = useSelector(state =>
      state.users.find(user => user.id === userId)
    )
  
    return <span>by {author ? author.name : 'Unknown author'}</span>
  }
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            className="card text-white bg-primary mb-3 mr-2 me-2"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
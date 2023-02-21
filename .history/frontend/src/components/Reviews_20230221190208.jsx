import React from "react";
import StarRating from "./StarRating";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


const Reviews = ({ reviews }) => {

  return (

    <div className="row row-cols-3 mb-2 d-flex p-4">
      {reviews.map((review) => {
        return (
          <div
            key={ review?.id}
            className="card text-white bg-info mb-3 mr-2 me-2"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span> {review?.name}</span>
              <span>
                <StarRating rating={ review?.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text"> {review?.review}</p>
            </div>
          </div>
        );
      })}
      </div>

  );
};

export default Reviews;
import React, { useState } from "react";
import HotelFinder from "../apis/HotelFinder";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddReview = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async (e) => {
    // e.preventDefault();
    try {
      const response = await HotelFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      console.log(response);
      navigate("/");
      navigate(location.pathname);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container className="container">
      <div className="mb-2 ">
        <Form action="">
          <div className="form-row">
            <div className="form-group col-8 ">
              <Form.label htmlFor="name" className="mb-2 fw-bold label">
                Name
              </Form.label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-4">
              <label htmlFor="rating" className="mb-2 mt-2 me-2 fw-bold label ">
                Rating
              </label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                id="rating"
                className="custom-select"
              >
                <option disabled>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Review" className="label mb-2 mt-2 me-2 fw-bold">
              Review
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              id="Review"
              className="form-control  mb-2"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmitReview}
            className="btn btn-primary"
          >
            Submit
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default AddReview;

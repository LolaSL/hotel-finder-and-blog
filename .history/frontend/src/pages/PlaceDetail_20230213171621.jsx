import React from 'react'
import Card from "react-bootstrap/Card";

  
  // import { Link } from "react-router-dom";
  // import Button from "react-bootstrap/Button";
  
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  const PlaceDetail = ({place}) => {
    const reducer = (state, action) => {
      switch (action.type) {
        case 'REFRESH_PRODUCT':
          return { ...state, product: action.payload };
        case 'CREATE_REQUEST':
          return { ...state, loadingCreateReview: true };
        case 'CREATE_SUCCESS':
          return { ...state, loadingCreateReview: false };
        case 'CREATE_ERROR':
          return { ...state, loadingCreateReview: false };
        case "FETCH_REQUEST":
          return { ...state, loading: true };
        case "FETCH_SUCCESS":
          return { ...state, product: action.payload, loading: false };
        case "FETCH_ERROR":
          return { ...state, loading: false, error: action.payload };
        default:
          return state;
      }
    };

    return (
      <div>
        <Card className="place border shadow rounded mt-4">
            <Card.Body className="content-title font-weight-light display-6 text-center">
              {place.title}
          </Card.Body>
          <div className="img p-2">
            <img
              src={place.image_url1}
              alt={place.title}
              className="place-image rounded shadow border img-fluid img-thumbnail"
            />
            <Card.Text className="content-place font-weight-light">
              {getText(place.where_to_stay)}
            </Card.Text>
            <Card.Text className="desc-place font-weight-light">
              {getText(place.description)}
            </Card.Text>
            <img
              src={place.image_url2}
              alt={place.title}
              className="place-image rounded shadow border img-fluid img-thumbnail"
            />
            <img
              src={place.image_url3}
              alt={place.title}
              className="place-image rounded shadow border img-fluid img-thumbnail"
            />
            {/* <Link className="link" to={`/place/${place.id}`}>
              <Button className="btn btn-home mb-2">Read More</Button>
            </Link> */}
          </div>
        </Card>
      </div>
    );
  };
  
  
export default PlaceDetail
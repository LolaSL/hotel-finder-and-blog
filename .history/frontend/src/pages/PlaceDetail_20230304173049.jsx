import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import moment from 'moment';

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

const reducer = (state, action) => {
    switch (action.type) {
      case 'REFRESH_PRODUCT':
        return { ...state, product: action.payload };
      case 'CREATE_REQUEST':
        return { ...state, loadingCreateReview: true };
      case 'CREATE_SUCCESS':
        return { ...state, loadingCreateReview: false };
      case 'CREATE_FAIL':
        return { ...state, loadingCreateReview: false };
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, product: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
const PlaceDetail = (place) => {
  const { id } = useParams()
  return (

    <div>
      <Card className="place border shadow rounded mt-4">
          <Card.Body className="content-title font-weight-light display-6 text-center">
          {place.title}
    </Card.Body>
         <div className="img p-2">
            <img
             className="place-image rounded shadow border img-fluid img-thumbnail" 
            src={place.image_url1}
            alt={place.title}/>
          </div>
      <Card.Text className="desc-place fw-bold">
              Destination:   {place.destination}
              </Card.Text>
              <Card.Text className="content-place font-weight-light">
            {getText(place.where_to_stay)}
          </Card.Text>
          <Card.Text className="desc-place font-weight-light">
            {getText(place.description)}
          </Card.Text>
          <img
            src={place.image_url2}
            alt={place.title}
            className="place-image rounded shadow border img-fluid img-thumbnail mb-2"
          />
          <img
            src={place.image_url3}
            alt={place.title}
            className="place-image rounded shadow border img-fluid img-thumbnail"
          />
          <p className="created_at">Created {moment(place.created_at).format("YYYY-MM-DD")}</p>*/
   </Card>
    </div>
          
        );
      };
      export default PlaceDetail;
              
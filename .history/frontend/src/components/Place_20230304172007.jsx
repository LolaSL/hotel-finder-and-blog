import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import moment from 'moment';

// const getText = (html) => {
//   const doc = new DOMParser().parseFromString(html, "text/html");
//   return doc.body.textContent;
// };

const Place = (props) => {
  const { place } = props;
  return (

    <div>
      <Card className="place border shadow rounded mt-4">
     

   <Link to={`/place/${place.id}`>
          <img
            src={place.image_url1}
            alt={place.title}
            className="place-image rounded shadow border img-fluid img-thumbnail"/>
        </Link>          <Card.Body className="content-title font-weight-light display-6 text-center">
          {place.title}
    </Card.Body>
   </Card>
    </div>
          
        );
      };
      
              /* <Card.Text className="desc-place fw-bold">
              Destination:   {place.destination}
          </Card.Text> */         /* <Card.Text className="content-place font-weight-light">
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
          <p className="created_at">Created {moment(place.created_at).format("YYYY-MM-DD")}</p>*/}
         

export default Place;

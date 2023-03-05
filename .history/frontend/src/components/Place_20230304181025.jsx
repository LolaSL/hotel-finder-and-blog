import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";


const Place = (props) => {
  // const params = useParams();
  // const { id } = params;
  const { place } = props;
  return (
    <div>
      <Card className="place border shadow rounded mt-4">
        <Link to={`/${id}`} className="link">
          <Card.Body className="content-title font-weight-light display-6 text-center">
            {place.title}
          </Card.Body>
          <div className="img p-2">
            <img
              className="place-image rounded shadow border img-fluid img-thumbnail"
              src={place.image_url1}
              alt={place.title}
            />
          </div>
        </Link>
      </Card>
    </div>
  );
};
export default Place;


// 
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Place(props) {
  const [readMore, setReadMore] = useState(false);
  const { place } = props;

  return (
    <Card className="shadow border card mb-3" key={place.id}>
      <div className="card-header py-3">
        <strong>{place.title}</strong>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-2">
          <h4 className="mb-3"> {place.description}</h4>
          <div className="events">
            <img
              className="card-img-top rounded"
              src={place.image_url1}
              alt={place.title}
            />
            <Button
              type="button"
              id ="btn-light"
              className="btn btn-light mt-2"
              onClick={() => setReadMore(!readMore)}
            >
              <h6> {`${!readMore ? "Read more" : "Read less"}`}</h6>
            </Button>
            <div className="read-more pt-4">
              {readMore && place.description}
            </div>
          </div>
          <footer className="blockquote-footer pt-4">
            {place.where_to_stay}
     
          </footer>
        </blockquote>
      </div>
    </Card>
  );
}
export default Place;


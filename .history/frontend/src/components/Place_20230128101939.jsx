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
        <strong>
          {" "}
          {event.location} {event.date} {event.time}{" "}
        </strong>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-2">
          <h4 className="mb-3"> {event.title}</h4>
          <div className="events">
            <img
              className="card-img-top rounded"
              src={event.image}
              alt={event.informationSource}
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
              {readMore && event.information}
            </div>
          </div>
          <footer className="blockquote-footer pt-4">
            {event.informationSource}
            <cite title="Source Title"> {event.reference}</cite>
          </footer>
        </blockquote>
      </div>
    </Card>
  );
}
export default Event;


import React,{ useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PlaceFinder from "../apis/PlaceFinder";



const Place = ( ) => {
  const { image_url1, title, description } = props;
  const [place, setPlace] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try{
      const response = await PlaceFinder.get('/');
      console.log(response)
        setPlace(response);
      } catch (error) {
        console.log(error)
      }
      
    }
    fetchData();
  }, [ ]);

  if (!place) {
    return (
      <section>
        <h2>Place not found!</h2>
      </section>
    );
  }

  return (
    <Card className="shadow border">
      <img src={image_url1} className="card-img" alt={title} />
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/place/:id`}>
          <Button>View more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Place;

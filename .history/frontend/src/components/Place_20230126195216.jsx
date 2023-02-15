import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PlaceFinder from '../apis/PlaceFinder';

const Place = (places) => {
  const { id } = useParams();
  const { selectedPlace, setSelectedHotel } = useContext(HotelsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PlaceFinder.get("/");
        console.log(response.data.data);
        setPlaces(response.data.data.places);
      } catch (err) {}
    };

    fetchData();
  }, [setHotels]);
  return (
    <Card className="shadow border">
      <Link to={`/place/:id`}>
        <img src={places.image_url1} className="card-img" alt={places.title} />
      </Link>
      <Card.Body>
        <Link to={`/place/:id`}>
          <Card.Title> {places.title}</Card.Title>
        </Link>
        <Card.Text>{places.description}</Card.Text>
        <Link to={`/place/:id`}><Button >View more</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Place;
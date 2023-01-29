import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import PlaceFinder from '../apis/PlaceFinder';
// import { PlacesContext } from "../context/PlacesContext";


const Place = ({ places }) => {
  // const {setPlaces } = useContext(PlacesContext);
  // const [title, image_url1, description] = props;

  // const handleSubmit = async (e) => {
  //   // e.preventDefault();
  //     try {
  //       const response = await PlaceFinder.post("/", {
  //         image_url1,
  //         title,
  //        description
  //       });
  //       setPlaces(response.data.data.place);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  // };
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

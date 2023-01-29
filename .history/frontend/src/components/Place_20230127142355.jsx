import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import PlaceFinder from '../apis/PlaceFinder';
// import { PlacesContext } from "../context/PlacesContext";


const Place = (props) => {
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
        <img src={image_url1} className="card-img" alt={title} />
      </Link>
      <Card.Body>
        <Link to={`/place/:id`}>
          <Card.Title> {title}</Card.Title>
        </Link>
        <Card.Text>{description}</Card.Text>
        <Link to={`/place/:id`}><Button >View more</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Place;

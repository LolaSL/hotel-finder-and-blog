import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import PlaceFinder from '../apis/PlaceFinder';
// import { PlacesContext } from "../context/PlacesContext";
import { useSelector } from 'react-redux'

const Place = ({ match }) => {
  const { placeId } = match.params;

  const place = useSelector(state =>
    state.places.find(place => place.id === placeId)
  )
  if (!place) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  // const { places } = props;
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
     
        <img src={place.image_url1} className="card-img" alt={place.title} />
    
      <Card.Body>
      
          <Card.Title> {place.title}</Card.Title>
  
        <Card.Text>{place.description}</Card.Text>
        <Link to={`/place/:id`}><Button >View more</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Place;

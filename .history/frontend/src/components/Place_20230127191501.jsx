import React
// ,{ useState, useEffect }
  from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import PlaceFinder from "../apis/PlaceFinder";



const Place = ({image_url1, title, description} ) => {

  // const [place, setPlace] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const { response } = await PlaceFinder.get('/')
  //     console.log(response)
  //     setPlace(response.data);
  //   }
  //   fetchData();
  // }, [ ]);

  // if (!place) {
  //   return (
  //     <section>
  //       <h2>Place not found!</h2>
  //     </section>
  //   );
  // }

  return (
    <Card className="shadow border">
      <img src={image_url1} className="card-img" alt={place.title} />
      <Card.Body>
        <Card.Title> {place.title}</Card.Title>
        <Card.Text>{place.description}</Card.Text>
        <Link to={`/place/:id`}>
          <Button>View more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Place;

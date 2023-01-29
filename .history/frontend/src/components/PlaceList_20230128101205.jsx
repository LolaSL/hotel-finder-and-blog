// import React, { useEffect, useState} from "react";
// import PlaceFinder from "../apis/PlaceFinder";
// import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Place from '../components/Place';
// // import { PlaceContext } from '../context/PlaceContext.js'


// const PlaceList = () => {

//   const {places, setPlaces } = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const {response} = await PlaceFinder.get("/");
//         console.log(response);
//         setPlaces(response);
//       } catch (err) {
//         console.log(err.message)
//       }
//     };

//     fetchData();
//   }, [setPlaces]);
//     return (
//           <Container>
//         <div className="places">
//             <Row>
//               {places.map((place, index) => (
//                 <Col key={index} sm={6} md={4} lg={3} className="mb-3 pt-2">
//                   <Place place={place} />
//                 </Col>
//               ))}
//             </Row>
//             </div>
//         </Container>
//     );
//   };
  

// export default PlaceList

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PlaceList = () => {
  const places = useSelector(state => state.places);

  const renderedPlaces = places.map(place => (
    <article className="place-excerpt" key={place.id}>
      <h3>{place.title}</h3>
      <p className="place-content">{place.content.substring(0, 100)}</p>
      <Link to={`/posts/${place.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (
    <section className="place-list">
      <h2>Places</h2>
      {renderedPlaces}
    </section>
  )
}
export default PlaceList;
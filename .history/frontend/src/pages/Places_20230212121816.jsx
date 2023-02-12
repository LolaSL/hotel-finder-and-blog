import React, { useState} from "react";
// import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import logger from "use-reducer-logger";
import Place from "../components/Place.jsx";
import { getPlases } from "../apis/PlaceFinder.js";
// import { Helmet } from 'react-helmet-async';
// import Loader from "../components/Rings.jsx";
// import Message from "../components/Message.jsx";



// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state,places: action.payload, loading: false };
//     case "FETCH_ERROR":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };


function Places() {

  const { places, setPlaces } = useState();
  
//   const [{ loading, error, places }, dispatch] = useReducer(logger(reducer), {
//    places: [],
//     loading: true,
//     error: "",
//   });

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: "FETCH_REQUEST" });
  //     try {
  //       const result = await getPlases();
  //       dispatch({ type: "FETCH_SUCCESS", payload: result.data });
  //     } catch (err) {
  //       dispatch({ type: "FETCH_ERROR", payload: err.message });
  //     }

  //     // setPosts(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="home">
     {/* <Helmet>
        <title>Posts</title>
      </Helmet> */}
      <h1 className="content-title display-1 font-weight-light  text-center p-4">       Places{" "}
          </h1>
        <Container className="places">
        {/* {loading ? (
    <div>Loading...</div>
            // <Loader />
        ) : error ? (
            <div>{ error}</div>
            // <Message variant="danger">{error}</Message> 
          ) : (  */}
              <Row className="row">
                {places.map((place) => (
                  <Row key={place.id}>
            <Place place={place}></Place>
              </Row>
                  ))}
              </Row>
   {/* )} */}
        </Container>
    </div>
  );
}

export default Places;

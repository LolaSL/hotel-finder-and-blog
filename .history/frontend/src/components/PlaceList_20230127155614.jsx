import React, { useEffect, useState } from "react";
import PlaceFinder from "../apis/PlaceFinder";
// import { PlaceContext } from "../context/PlaceContext";
import Container from "react-bootstrap/Container;"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Place from '../components/Place';



const PlaceList = () => {


  const [places, setPlace] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await PlaceFinder.get('/');
      setPlace(data);
    }
    fetchData();
  }, []);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await PlaceFinder.get("/");
    //       console.log(response.data.data);
    //       setPlaces(response.data.data.places);
    //     } catch (err) {}
    //   };
  
    //   fetchData();
    // }, [setPlaces]);
  
    return (
          <Container>
        <h1 className="text-center mb-2 py-4 fw-bold">Featured Arts</h1>
        <div className="products">
            <Row>
              {places && data.map((place, index) => (
                <Col key={index} sm={6} md={4} lg={3} className="mb-3 pt-2">
                  <Place place={place} />
                </Col>
              ))}
            </Row>
            </div>
        </Container>
    );
  };
  

export default PlaceList
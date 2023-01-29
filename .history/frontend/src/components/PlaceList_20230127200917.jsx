import React, { useEffect, useContext} from "react";
import PlaceFinder from "../apis/PlaceFinder";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Place from '../components/Place';
import { PlaceContext } from '../context/PlaceContext.js'


const PlaceList = () => {

  const {places, setPlaces } = useContext(PlaceContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {response} = await PlaceFinder.get("/");
        console.log(response);
        setPlaces(response);
      } catch (err) {
        console.log(err.message)
      }
    };

    fetchData();
  }, [setPlaces]);
    return (
          <Container>
        <div className="products">
            <Row>
              {placplaces.map((place, index) => (
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
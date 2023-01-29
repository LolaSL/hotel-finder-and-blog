import React, { useEffect, useContext} from "react";
import PlaceFinder from "../apis/PlaceFinder";
import Container from "react-bootstrap/Container;"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Place from '../components/Place';
import PlacesContext from '../context/PlaceContext.js'


const PlaceList = (props) => {

  const {places, setPlaces } = useContext(PlacesContext);


  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await PlaceFinder.get('/');
  //     setPlace(data);
  //   }
  //   fetchData();
  // }, [setPlace]);
  
  // useEffect(() => {
      
  //     const fetchData = async () => {
  //       try {
  //         const {data} = await PlaceFinder.get("/");
  //         console.log(data);
  //         setPlaces(data.data.places);
  //       } catch (error) {
  //         console.log(error.message)
  //       }
  //     };
  
  //   fetchData();
    
  //   }, [setPlaces]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { response } = await PlaceFinder.get("/");
        console.log(response);
        setPlaces(response.places);
      } catch (err) {
        console.log(err.message)
      }
    };

    fetchData();
  }, [setPlaces]);
    return (
          <Container>
        <h1 className="text-center mb-2 py-4 fw-bold">Featured Arts</h1>
        <div className="products">
            <Row>
              {places.map((place, index) => (
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
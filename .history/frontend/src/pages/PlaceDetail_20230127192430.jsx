import React, { useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import { PlacesContext } from '../context/PlaceContext';
import PlaceFinder from '../apis/PlaceFinder';
import Container from 'react-bootstrap/Container';

const PlaceDetail = (props) => {
  const { id } = useParams();

[places, setPlaces] = useContext(PlacesContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PlaceFinder.get(`/${id}`);
        console.log(response);
        setPlaces(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);
  return (
    <Container className="container">
    <div>
      {setPlaces && (
        <>
          <h1 className="text-center display-1">{setPlaces.place.title}</h1>
          <div className="text-center">
              {places}
      
          </div>
          <div className="mt-3">
           
          </div>
       
        </>
      )}
      </div>
    </Container>
  )
}

export default PlaceDetail
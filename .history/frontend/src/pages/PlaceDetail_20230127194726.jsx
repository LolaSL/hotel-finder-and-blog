import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { PlacesContext } from '../context/PlaceContext';
import PlaceFinder from '../apis/PlaceFinder';
import Container from 'react-bootstrap/Container';

const PlaceDetail = ({title, image_url2, description}) => {
  const { id } = useParams();

const [place, setPlace] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PlaceFinder.get(`/${id}`);
        console.log(response);
        setPlace(response.data.place);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);
  return (
    <Container className="container">
    <div>
      {setPlace && (
        <>
          <h1 className="text-center display-1">{title}</h1>
          <div className="text-center">
              {place}
      
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
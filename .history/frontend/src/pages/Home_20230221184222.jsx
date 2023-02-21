import React from 'react';
import AddHotel from '../components/AddHotel';
import HotelList from "../components/HotelList";
import Container from "react-bootstrap/Container";


const Home = () => {
  return (
   
      <div>
         <Container className="container">
      <h1 className="font-weight-light display-1 text-center mt-4 mb-4">
        Hotel Finder
      </h1>
      <AddHotel />
        <HotelList />
       </Container>  
      </div>
   
  )
}

export default Home;
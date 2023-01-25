import React from 'react';
import AddHotel from '../components/AddHotel';
import HotelList from "../components/HotelList";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container>
    <div>
      <h1 className="font-weight-light display-1 text-center">
        Hotel Finder
      </h1>
      <AddHotel />
      <HotelList />
      </div>
    </Container>
  )
}

export default Home;
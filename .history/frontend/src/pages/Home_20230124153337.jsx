import React from 'react';
import AddHotel from '../components/AddHotel';
import HotelList from "../components/HotelList";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <Container className="container">
      <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
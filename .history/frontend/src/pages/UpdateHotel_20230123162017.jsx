import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HotelsContext } from "../context/HotelsContext";
import HotelFinder from "../apis/HotelFinder";
import Container from 'react-bootstrap/Container'



const UpdateHotel = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { hotels } = useContext(HotelsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await HotelFinder.get(`/${id}`);

      setName(response.data.data.hotel.name);
      setLocation(response.data.data.hotel.location);
      setPriceRange(response.data.data.hotel.price_range);
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedHotel = await HotelFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    console.log(updatedHotel);
    navigate("/");
  };

  return (
    <div>
      <Container className="container">
      <form action="">
        <div className="form-group mb-2 fw-bold mt-2">
          <label htmlFor="name" className="mb-2 fw-bold ">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location" className="mb-2 fw-bold ">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="price_range" className="mb-2 fw-bold ">Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            id="price_range"
            className="form-control"
            type="number"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary mb-2 fw-bold ""
        >
          Submit
        </button>
        </form>
      </Container>
    </div>
  );
};

export default UpdateHotel;
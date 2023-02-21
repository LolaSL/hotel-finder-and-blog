import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HotelsContext } from "../context/HotelsContext";
import HotelFinder from "../apis/HotelFinder";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';

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
  }, [id, hotels]);

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
    <Container className="container">
      <div>
        <h1 className="font-weight-light display-1 text-center mt-4 mb-2">
          Update Hotel
        </h1>

        <Form action="">
          <div className="form-group mb-2 fw-bold mt-2">
            <Form.Label htmlFor="name" className="mb-2 fw-bold label">
              Name
            </Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <Form.Label htmlFor="location" className="mb-2 fw-bold label">
              Location
            </Form.Label>
            <Form.Control
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group mt-2">
            <Form.Label htmlFor="price_range" className="mb-2 fw-bold label">
              Price Range
            </Form.Label>
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
            className="btn btn-primary mb-2 mt-2"
          >
            Submit
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default UpdateHotel;

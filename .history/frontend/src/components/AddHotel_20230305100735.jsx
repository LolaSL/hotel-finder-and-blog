import React, { useState, useContext } from "react";
import HotelFinder from "../apis/HotelFinder";
import {HotelsContext } from "../context/HotelsContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const AddHotel = () => {
  const {addHotels } = useContext(HotelsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
      try {
        const response = await HotelFinder.post("/", {
          name,
          location,
          price_range: priceRange,
        });
        addHotels(response.data.data.hotel);
      } catch (err) {
        console.log(err.message);
      }
  };
  return (
    <div className="mb-4">
      <Form action="">
        <div className="form-row d-flex">
          <div className="col me-2 w-35 d-flex">
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col me-2 w-35 d-flex">
            <Form.Control
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col me-2 d-flex">
            <Form.Select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select col w-35 me-2 my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </Form.Select>
          </div>
          <Button
            onClick={handleSubmit}
            type="submit" size="sm"
            className="btn btn-primary ml-4"
          >
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddHotel;

import React, { useEffect, useContext } from "react";
import HotelFinder from "../apis/HotelFinder";
import { HotelsContext } from "../context/HotelsContext";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

const HotelList = (props) => {
const [name, location, price_range] = props
  const { hotels, setHotels } = useContext(HotelsContext);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HotelFinder.get("/");
        console.log(response);
        setHotels(response.data.data.hotels);
      } catch (err) {}
    };

    fetchData();
  }, [setHotels]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await HotelFinder.delete(`/${id}`);
      setHotels(
        hotels.filter((hotel) => {
          return hotel.id !== id;
        })
      );
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/hotels/${id}/update`);
  };

  const handleHotelSelect = (id) => {
    navigate(`/hotels/${id}`);
  };

  const renderRating = (hotel) => {
    if (!hotel.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={hotel.id} />
        <span className="text-warning ml-1">({hotel.count})</span>
      </>
    );
  };

  return (
    <div className="list-group mt-4">
      <table className="table table-hover bg-opacity table-dark text-info border ">
        <thead>
          <tr className="bg-dark">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {hotels && hotels.map((id,name, location,price_range, index) => {
              return (
                <tr onClick={() => handleHotelSelect(id)} key={index}>
                  <td>{name}</td>
                  <td>{location}</td>
                  <td>{"$".repeat(price_range)}</td>
                  <td>{renderRating(hotel)}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e,id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, hotel.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default HotelList;

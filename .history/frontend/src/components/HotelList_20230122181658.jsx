import React, { useEffect, useContext } from "react";
import HotelFinder from "../apis/HotelFinder";
import { HotelsContext } from "../context/HotelsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";

const HotelList = (props) => {
  const []
  const { hotels, setHotels } = useContext(HotelsContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HotelFinder.get("/");
        console.log(response.data.data);
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
      );console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/hotels/${id}/update`);
  };

  const handleHotelSelect = (id) => {
    history.push(`/hotels/${id}`);
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
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {hotels &&
            hotels.map((hotel) => {
              return (
                <tr
                  onClick={() => handleHotelSelect(hotel.id)}
                  key={hotel.id}
                >
                  <td>{hotel.name}</td>
                  <td>{hotel.location}</td>
                  <td>{"$".repeat(hotel.price_range)}</td>
                  <td>{renderRating(hotel)}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, hotel.id)}
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
          {/* <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default HotelList;
import React, { useState, createContext } from "react";

export const HotelsContext = createContext();

export const HotelsContextProvider = (props) => {
    const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [reviews, setReviews] = useState([]);
  
    const addHotels = (hotel, review) => {
      setHotels([...hotels, hotel]);
setReviews([...reviews, review])
    };
    return (
      <HotelsContext.Provider
        value={{
          hotels,
          setHotels,
          reviews,
          setReviews,
          addHotels,
          selectedHotel,
          setSelectedHotel,
        }}
      >
        {props.children}
      </HotelsContext.Provider>
    );
  };
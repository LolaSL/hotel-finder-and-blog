import React, { useState, createContext } from "react";

export const HotelsContext = createContext();

export const HotelsContextProvider = (props) => {
    const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [reviews, setReviews] = useState([]);
  
    const addHotels = (hotel) => {
      setHotels([...hotels, hotel]);
setReviews
    };
    return (
      <HotelsContext.Provider
        value={{
          hotels,
          setHotels,
          addHotels,
          selectedHotel,
          setSelectedHotel,
        }}
      >
        {props.children}
      </HotelsContext.Provider>
    );
  };
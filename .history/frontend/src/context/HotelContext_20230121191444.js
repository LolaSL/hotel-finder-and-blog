import React, { useState, createContext } from "react";

export const HotelContext = createContext();

export const HotelsContextProvider = (props) => {
    const [hotels, setHotels] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);
  
    const addHotels = (hotel) => {
      setHotels([...hotels, hotel]);
    };
    return (
      <HotelContext.Provider
        value={{
          hotels,
          setHotels,
          addHotels,
          selectedHotel,
          setSelectedHotel,
        }}
      >
        {props.children}
      </HotelContext.Provider>
    );
  };
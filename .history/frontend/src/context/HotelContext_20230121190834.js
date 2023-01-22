import React, { useState, createContext } from "react";

export const HotelsContext = createContext();

export const HotelsContextProvider = (props) => {
    const [hotels, setHotels] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);
  
    const addHotels = (hotel) => {
      setHotels([...hotels, hotel]);
    };
    return (
      <HotelsContext.Provider
        value={{
          restaurants,
          setRestaurants,
          addRestaurants,
          selectedRestaurant,
          setSelectedRestaurant,
        }}
      >
        {props.children}
      </HotelsContext.Provider>
    );
  };
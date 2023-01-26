import React, { useState, createContext } from "react";

export const PlacesContext = createContext();

export const PlacesContextProvider = (props) => {
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
  
    const addHotels = (hotel) => {
      setPlaces([...hotels, hotel]);
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
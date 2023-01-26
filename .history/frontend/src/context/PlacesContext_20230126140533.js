import React, { useState, createContext } from "react";

export const PlacesContext = createContext();

export const PlacesContextProvider = (props) => {
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
  
    const addHotels = (place) => {
      setPlaces([...places, place]);
    };
    return (
      <PlacesContext.Provider
        value={{
          places,
          setHotels,
          addHotels,
          selectedHotel,
          setSelectedHotel,
        }}
      >
        {props.children}
      </PlacesContext.Provider>
    );
  };
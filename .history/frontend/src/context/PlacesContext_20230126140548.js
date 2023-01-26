import React, { useState, createContext } from "react";

export const PlacesContext = createContext();

export const PlacesContextProvider = (props) => {
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
  
    return (
      <PlacesContext.Provider
        value={{
          places,
          setPlaces,
          addHotels,
          selectedHotel,
          setSelectedHotel,
        }}
      >
        {props.children}
      </PlacesContext.Provider>
    );
  };
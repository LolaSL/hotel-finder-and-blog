import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = (props) => {
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
  
    return (
      <PlacesContext.Provider
        value={{
          places,
          setPlaces,
           selectedPlace,
          setSelectedPlace,
        }}
      >
        {props.children}
      </PlacesContext.Provider>
    );
  };
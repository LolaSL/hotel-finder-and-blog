import React, { useState, createContext } from "react";
import Pla
export const PlaceContext = createContext();

export const PlaceContextProvider = (props) => {
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
  
    return (
      <PlaceContext.Provider
        value={{
          places,
          setPlaces,
           selectedPlace,
          setSelectedPlace,
        }}
      >
        {props.children}
      </PlaceContext.Provider>
    );
  };
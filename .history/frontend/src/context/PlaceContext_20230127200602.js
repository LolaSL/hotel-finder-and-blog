import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = ({ props }) => {
  const [places, setPlaces] = useState([]);



  return (
    <PlaceContext.Provider
      value={{
        places,
        setPlaces
      }}
    >
      {props.children}
    </PlaceContext.Provider>
  );
};
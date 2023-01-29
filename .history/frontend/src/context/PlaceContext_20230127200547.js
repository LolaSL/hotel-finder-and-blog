import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = ({propchildren}) => {
  const [places, setPlaces] = useState([]);



  return (
    <PlaceContext.Provider
      value={{
        places,
        setPlaces
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};
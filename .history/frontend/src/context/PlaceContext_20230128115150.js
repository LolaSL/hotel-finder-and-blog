import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = ({ props }) => {
  const [place, setPlace] = useState([]);



  return (
    <PlaceContext.Provider
      value={{
        place,
        setPlace
      }}
    >
      {props.children}
    </PlaceContext.Provider>
  );
};
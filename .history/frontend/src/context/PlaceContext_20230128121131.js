import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = ({ props }) => {
  const [place, setPlace] = useState([]);
  const [loading, setLoading] = useState(false);


  return (
    <PlaceContext.Provider
      value={{
        place,
        setPlace,
        loading, setLoading
      }}
    >
      {props.children}
    </PlaceContext.Provider>
  );
};
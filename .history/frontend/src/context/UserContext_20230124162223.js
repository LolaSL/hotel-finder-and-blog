import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);
  
    const addHotels = (hotel) => {
      setHotels([...hotels, hotel]);
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
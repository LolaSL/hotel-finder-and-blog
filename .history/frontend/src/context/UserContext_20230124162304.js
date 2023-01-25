import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const [users, setUsers] = useState([]);


    return (
      <UsersContext.Provider
        value={{
          users
          setUsers,
          addHotels,
          selectedHotel,
          setSelectedHotel,
        }}
      >
        {props.children}
      </UsersContext.Provider>
    );
  };
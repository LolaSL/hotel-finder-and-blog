import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userI, setUsers] = useState([]);

    return (
      <UsersContext.Provider
        value={{
          users,
          setUsers
     
        }}
      >
        {props.children}
      </UsersContext.Provider>
    );
  };
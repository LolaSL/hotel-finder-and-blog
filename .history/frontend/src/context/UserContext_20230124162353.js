import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userInfo, setuser] = useState([]);

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
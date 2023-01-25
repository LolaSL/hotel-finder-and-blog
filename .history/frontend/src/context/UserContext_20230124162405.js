import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userInfo, setuserInfo] = useState([]);

    return (
      <UsersContext.Provider
        value={{
          users,
                setUsers,
          userInfo
     
        }}
      >
        {props.children}
      </UsersContext.Provider>
    );
  };
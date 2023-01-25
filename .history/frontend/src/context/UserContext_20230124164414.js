import React, { useState, createContext, useReducer  } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userInfo] = useState([]);


    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                userInfo,
                state
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
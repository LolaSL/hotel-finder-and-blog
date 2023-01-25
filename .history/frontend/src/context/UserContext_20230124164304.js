import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userInfo] = useState([]);
    const value = { state, dispatch };

    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                userInfo,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
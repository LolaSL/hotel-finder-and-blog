import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UsersContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userInfo] = useState([]);

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
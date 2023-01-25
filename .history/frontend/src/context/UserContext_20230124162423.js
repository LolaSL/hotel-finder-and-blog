import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    return (
        <UsersContext.Provider
            value={{
                users,
                setUsers,
                userInfo,
                setUserInfo
            }}
        >
            {props.children}
        </UsersContext.Provider>
    );
};
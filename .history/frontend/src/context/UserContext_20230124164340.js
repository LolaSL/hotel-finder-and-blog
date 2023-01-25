import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userInfo] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

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
import React, { useState, createContext, useReducer} from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userInfo] = useState([]);
    const [state, dispatch] = useReducer();

    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                userInfo,
           state, dispatch
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
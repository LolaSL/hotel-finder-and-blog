import React, { useState, createContext, useReducer} from "react";

export const UserContext = createContext();
const initialState = {
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null
}
export const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [userInfo] = useState([]);
    const [state, dispatch] = useReducer(initialState);

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
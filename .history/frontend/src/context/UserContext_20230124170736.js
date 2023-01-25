import React, {createContext, useReducer} from "react";

export const UserContext = createContext();
const initialState = {
    userInfo: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null
}
function reducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'USER_SIGNIN':
            return { ...state, userInfo: action.payload };
        case 'USER_SIGNOUT':
            return {
                ...state,
                userInfo: null,
            
            };
    }
};


export const UserContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
}
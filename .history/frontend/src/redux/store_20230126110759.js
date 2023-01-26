import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import usersReducer from '../features/users/usersSlice'''
export const store = configureStore({
    reducer: {
        auth: authSlice,
        users: usersReducer
    },
});
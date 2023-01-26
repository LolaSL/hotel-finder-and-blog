import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { user_id: "", name: "", email: "",
  password: "", },

]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer;
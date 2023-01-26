import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { user_id: '4', name: 'Test4'email: "",
  password: "", },

]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer;
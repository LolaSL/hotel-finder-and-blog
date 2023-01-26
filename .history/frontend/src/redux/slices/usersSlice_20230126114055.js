import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { user_id: '', name: 'Test4', email: "",
  password: "", },

]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer;
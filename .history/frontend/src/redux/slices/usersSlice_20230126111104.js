import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { user_id: '', name: 'Test4' },

]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer;
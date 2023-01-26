import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '4', name: 'Test4' },

]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer;
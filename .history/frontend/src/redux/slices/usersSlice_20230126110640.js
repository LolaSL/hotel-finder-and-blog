import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '', name: 'Tianna Jenkins' },

]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer
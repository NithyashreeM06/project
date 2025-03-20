import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: { userInfo: null },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/users/login', userData);
    dispatch(setUser(response.data));
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
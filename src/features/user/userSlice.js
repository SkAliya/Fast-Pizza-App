import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { createName } = userSlice.actions;
export default userSlice.reducer;

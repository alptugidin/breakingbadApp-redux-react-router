import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDetails = createAsyncThunk('details/getDetails', async ({ id }) => {
  const response = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
  return response.data;
});

export const detailSlice = createSlice({
  name: 'details',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getDetails.pending]: (state) => {
      state.isLoading = true;
    },

    [getDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.message;
    },

    [getDetails.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default detailSlice.reducer;

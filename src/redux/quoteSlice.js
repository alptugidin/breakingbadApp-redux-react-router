import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQuotes = createAsyncThunk('quotes/getQuotes', async () => {
  const response = await axios.get('https://www.breakingbadapi.com/api/quotes');
  return response.data;
});

export const quoteSlice = createSlice({
  name: 'quotes',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getQuotes.pending]: (state) => {
      state.isLoading = true;
    },

    [getQuotes.rejected]: (state, action) => {
      state.error = action.message;
    },

    [getQuotes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
  },
});

export default quoteSlice.reducer;

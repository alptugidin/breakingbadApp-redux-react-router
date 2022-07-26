import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCharacters = createAsyncThunk('characters/getCharacters', async ({ offset }) => {
  const response = await axios.get(`https://www.breakingbadapi.com/api/characters?limit=20&offset=${offset}`);
  return response.data;
});

export const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    offset: 0,

  },
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.isLoading = true;
    },

    [getCharacters.rejected]: (state, action) => {
      state.error = action.message;
      state.isLoading = false;
    },

    [getCharacters.fulfilled]: (state, action) => {
      state.items.push(...action.payload);
      state.isLoading = false;
    },
  },
});

export default characterSlice.reducer;

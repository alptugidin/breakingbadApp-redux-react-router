import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import quotesReducer from './quoteSlice';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    quotes: quotesReducer,
  },
});

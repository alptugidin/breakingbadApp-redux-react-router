import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import quotesReducer from './quoteSlice';
import detailsReducer from './detailSlice';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    quotes: quotesReducer,
    details: detailsReducer,
  },
});

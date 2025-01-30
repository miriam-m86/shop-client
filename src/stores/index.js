import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers';

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Adding the cartSlice reducer to the store
  },
});

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [], // Stores purchased products
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrders: (state, action) => {
      state.orders.push(action.payload); // Add product to orders list
    },
  },
});

export const { addToOrders } = ordersSlice.actions;
export default ordersSlice.reducer;


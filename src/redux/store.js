import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import ordersReducer from './ordersSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
  },
});

export default store;

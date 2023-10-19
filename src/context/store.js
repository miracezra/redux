import { configureStore } from '@reduxjs/toolkit';
import expensesSlice from './Slice';

const store = configureStore({
  reducer: {
    expense: expensesSlice
  }
});

export default store;

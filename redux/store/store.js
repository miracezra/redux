// store.js

import { configureStore } from '@reduxjs/toolkit';

// İlk state değeri
const initialState = {
  categoryIcon: '',
  categoryName: '',
  amount: '',
  date: '',
  note: '',
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATEGORY_ICON':
        return { ...state, category: { ...state.category, categoryIcon: action.payload } };
      case 'SET_CATEGORY_NAME':
        return { ...state, category: { ...state.category, categoryName: action.payload } };
      case 'SET_AMOUNT':
        return { ...state, category: { ...state.category, amount: action.payload } };
      case 'SET_DATE':
        return { ...state, category: { ...state.category, date: action.payload } };
      case 'SET_NOTE':
        return { ...state, category: { ...state.category, note: action.payload } };
      default:
        return state;
    }
  };
  
const store = configureStore({
  reducer: categoryReducer,
});

export default store;

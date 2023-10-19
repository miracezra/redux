import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 0,
    title: '',
    icon: '',
    date: "",
    not: ''
};

const expensesSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setIcon: (state, action) => {
            state.icon = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        setNot: (state, action) => {
            state.not = action.payload;
        }
    }
})
export const { setAmount, setTitle, setIcon, setDate, setNot } = expensesSlice.actions
export default expensesSlice.reducer;
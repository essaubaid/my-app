import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        isFetching: false,
        error: false,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.productPrice * action.payload.quantity;
        },
        productStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        productFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        emptyCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const { addProduct, productFailure, productStart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
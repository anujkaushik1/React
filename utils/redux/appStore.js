import { configureStore, createReducer } from "@reduxjs/toolkit";
import cart from "./slices/cart";

const appSore = configureStore({
    reducer: {
        cart: cart
    }
})

export default appSore;
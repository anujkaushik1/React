import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart_test',
    initialState: {
        items: []
    },

    reducers: {
        addItem: (state, action) => {
            console.log('anuj action = ', action);
            
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearItems: (state) => {
            state.items.length = 0;
        }
    }
})



export const {addItem, removeItem, clearItems} = cartSlice.actions;
export default cartSlice.reducer;
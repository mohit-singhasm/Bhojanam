import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cartList: [
        // { id: 1, img: 'src/assets/product__2.webp', name: 'Crunchy Crisps', price: '$300' }
    ],
    totalAmount: 0,
    openCart: false
}

export const cartSlice = createSlice({
    name: 'CartList',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = {
                id: nanoid(), quantity: 1, totalprice: action.payload.price, ...action.payload
            }
            const existingItem = state.cartList.find((eitem) => eitem.name === item.name)

            if (existingItem) {
                existingItem.quantity++
                existingItem.totalprice = existingItem.quantity * parseInt(existingItem.price)
            } else {
                state.cartList.push(item)
            }
        },
        removeItem: (state, action) => {
            const existingItem = state.cartList.find((eitem) => eitem.name === action.payload.name)

            if (existingItem.quantity > 1) {
                existingItem.quantity--
                existingItem.totalprice = parseInt(existingItem.totalprice) - parseInt(action.payload.price)
            } else {
                state.cartList = state.cartList.filter((item) => item.id !== action.payload.id)
            }
        },
        showCart: (state, action) => { 
            state.openCart = !state.openCart;
        }
    }
})


export const { addItem, removeItem, showCart } = cartSlice.actions;

export default cartSlice.reducer;

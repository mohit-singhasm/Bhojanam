import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

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
            toast.success('Added to Cart')
        },
        removeItem: (state, action) => {
            const existingItem = state.cartList.find((eitem) => eitem.name === action.payload.name)

            if (existingItem.quantity > 1) {
                existingItem.quantity--
                existingItem.totalprice = parseInt(existingItem.totalprice) - parseInt(action.payload.price)
            } else {
                state.cartList = state.cartList.filter((item) => item.id !== action.payload.id)
            }
            toast.error('Removed to Cart')
        },
        showCart: (state, action) => { 
            state.openCart = !state.openCart;
        }
    }
})


export const { addItem, removeItem, showCart } = cartSlice.actions;

export default cartSlice.reducer;

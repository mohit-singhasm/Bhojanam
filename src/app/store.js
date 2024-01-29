import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart-slice";
import featureData from "../features/feature-slice"
import blogData from "../features/blog-slice"

export const store = configureStore({
    reducer: {
        cartReducer,
        featureData,
        blogData
    }
});
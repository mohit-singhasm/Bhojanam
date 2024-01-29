import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    breakFast : [
        { id: 0, img: 'src/assets/product__5.webp', name: 'Fresh Tamato', price: '400' },
        { id: 1, img: 'src/assets/product__2.webp', name: 'Crunchy Crisps', price: '300' },
        { id: 2, img: 'src/assets/product__3.webp', name: 'Jewel Cranberries', price: '200' },
        { id: 3, img: 'src/assets/product__4.webp', name: 'Almond Organic', price: '100' },
      ],
    fruits : [
        { id: 0, img: 'src/assets/product__1.webp', name: 'dried Mango', price: '500' },
        { id: 1, img: 'src/assets/product__2.webp', name: 'Crunchy Crisps', price: '300' },
        { id: 2, img: 'src/assets/product__3.webp', name: 'Jewel Cranberries', price: '200' },
        { id: 3, img: 'src/assets/product__4.webp', name: 'Almond Organic', price: '100' },
      ],
}

const featureSlice = createSlice({
    name: 'FeatureSlice Data',
    initialState,
    reducers: {
        addItem: () => {},
        removeItem: () => {}
    }
})

export const {addItem, removeItem} = featureSlice.actions

export default featureSlice.reducer

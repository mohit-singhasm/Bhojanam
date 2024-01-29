import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogData: [
        {
            id: 1,
            img: "src/assets/post__1.webp",
            title: "Healty food Healty life",
            date: "Aug 23, 2024",
            comment: 8,
        },
        {
            id: 2,
            img: "src/assets/post__2.webp",
            title: "Healty food Healty life",
            date: "Aug 23, 2024",
            comment: 8,
        },
        {
            id: 3,
            img: "src/assets/post__3.webp",
            title: "Healty food Healty life",
            date: "Aug 23, 2024",
            comment: 8,
        },
        // {
        //     id: 4,
        //     img: "src/assets/post__1.webp",
        //     title: "Healty food Healty life",
        //     date: "Aug 23, 2024",
        //     comment: 8,
        // }
    ]
}

const blogSlice = createSlice({
    name: 'Blog_Data',
    initialState,
    reducers: {
        addBlog: () => {},
        removeBlog: () => {}
    }
})

export const {addBlog, removeBlog} = blogSlice.actions;

export default blogSlice.reducer
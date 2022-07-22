import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getPosts = createAsyncThunk(
    "post/getPosts", 
    async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
)

const initialState = {
    all: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.all = action.payload
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
            })
            .addCase(getPosts.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
            })
    }
})

export const selectPosts = state => state.post.all
export const isPostsLoading = state => state.post.isLoading

export default postSlice.reducer
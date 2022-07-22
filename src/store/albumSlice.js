import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getAlbums = createAsyncThunk(
    "album/getAlbums", 
    async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
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

export const albumSlice = createSlice({
    name: "album",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAlbums.fulfilled, (state, action) => {
                state.all = action.payload
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
            })
            .addCase(getAlbums.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getAlbums.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
            })
    }
})

export const selectAlbums = state => state.album.all
export const isAlbumsLoading = state => state.album.isLoading

export default albumSlice.reducer
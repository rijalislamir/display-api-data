import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getUsers = createAsyncThunk(
    "user/getUsers", 
    async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
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

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.all = action.payload
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
            })
            .addCase(getUsers.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
            })
    }
})

export const selectUsers = state => state.user.all
export const isUsersLoading = state => state.user.isLoading

export default userSlice.reducer
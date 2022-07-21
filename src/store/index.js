import { configureStore } from '@reduxjs/toolkit'

import userSlice from './userSlice'
import postSlice from './postSlice'
import albumSlice from './albumSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        post: postSlice,
        album: albumSlice
    },
})
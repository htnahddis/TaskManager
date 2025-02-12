import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.js'
import {apiSlicer} from  "./slices/apiSlicer"

const store =  configureStore({
    reduce: {
        auth: authReducer,
        [apiSlicer.reducerPath]: apiSlicer.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlicer.middleware),
        devTools: true,

    
})
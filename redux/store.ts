import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from './slices/modal'


export const store = configureStore({
    reducer: {
        modal: ModalReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
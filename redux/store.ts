import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from './slices/modal'
import widgetsReducer from './slices/widgets'
//widgets reducers
import BalloonImageReducer from './slices/widget/balloonImage'

export const store = configureStore({
    reducer: {
        modal: ModalReducer,
        widgets: widgetsReducer,
        balloon_image_widget: BalloonImageReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
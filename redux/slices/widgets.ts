import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from '../store'

interface WidgetsState {
    widgets: string[]
}

const initialState: WidgetsState = {
    widgets: []
}

export const widgetsSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        addWidgets: (state, action: PayloadAction<string>) => {
            state.widgets.push(action.payload)
        },
        removeWidgets: (state, action: PayloadAction<string>) => {
            state.widgets = state.widgets.filter(w => w !== action.payload)
        }
    }
})

export const { addWidgets, removeWidgets } = widgetsSlice.actions

export const getWidgets = (state: RootState) => state.widgets

export default widgetsSlice.reducer

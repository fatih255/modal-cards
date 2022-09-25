import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BalloonImageWidgetType } from "../../../types/widget"


const initialState: BalloonImageWidgetType = {
    width: '90px',
    height: '90px',
    bgColor: "bg-primary",
    imageName: 'security-code'
}

export const BalloonImageSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        updateBalloonImageWidget: (state, action: PayloadAction<BalloonImageWidgetType>) => {
            state = { ...state, ...action.payload }
        }
    }
})

export const { updateBalloonImageWidget } = BalloonImageSlice.actions

export default BalloonImageSlice.reducer

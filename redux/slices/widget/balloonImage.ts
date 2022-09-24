import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BalloonImageWidgetType } from "../../../types/widget"
import SecurityCodeIcon from 'svgs/modal/security-code.svg'


const initialState: BalloonImageWidgetType = {
    width: '90px',
    height: '90px',
    bgColor: "bg-primary",
    image: SecurityCodeIcon
}

export const BalloonImageSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<BalloonImageWidgetType>) => {
            state= {...state,...action.payload}
        }
    }
})

export const { update } = BalloonImageSlice.actions

export default BalloonImageSlice.reducer

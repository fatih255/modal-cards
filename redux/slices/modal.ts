import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalType = {
    selectedModalName: string | undefined
    ModalProps: {
        content: string[] | null
    }
    LayoutProps: {
        size: string
        position: string
        colors: string
    }
}
export const ModalInitialState: ModalType = {
    selectedModalName: undefined,
    ModalProps: {
        content: null
    },
    LayoutProps: {
        size: "max-w-[600px] max-h-[600px]",
        position: "pos-mc",
        colors: 'color-primary'
    }
}

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: ModalInitialState,
    reducers: {
        selectModal: (state, action: PayloadAction<string>) => {
            state.selectedModalName = action.payload

        },
        updateLayoutProps: (state, action: PayloadAction<{ name: string, value: string }>) => {
            state.LayoutProps = { ...state.LayoutProps, [action.payload.name]: action.payload.value }
        },
        updateModalProps: (state, action: PayloadAction<{ name: string, value: string[] }>) => {
            state.ModalProps = { ...state.ModalProps, [action.payload.name]: action.payload.value }
        },
    }
})

export const { selectModal, updateLayoutProps, updateModalProps } = ModalSlice.actions
export default ModalSlice.reducer
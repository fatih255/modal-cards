import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getmodalConstants, modalContentConstants } from '../../lib/modalConstants';


export type ModalType = {
    selectedModalName: string | null
    ModalProps: {
        content: string[] | []
        image: string | null
    }
    LayoutProps: {
        size: string
        position: string
        colors: string
    }
}
export const ModalInitialState: ModalType = {
    selectedModalName: null,
    ModalProps: {
        content: [],
        image: null
    },
    LayoutProps: {
        size: "max-w-[600px] max-h-[600px]",
        position: "pos-mc",
        colors: 'color-primary',
    }
}

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: ModalInitialState,
    reducers: {
        selectModal: (state, action: PayloadAction<string>) => {
            state.selectedModalName = action.payload
            state.ModalProps.content = getmodalConstants(action.payload)

        },
        updateLayoutProps: (state, action: PayloadAction<{ name: string, value: string }>) => {
            state.LayoutProps = { ...state.LayoutProps, [action.payload.name]: action.payload.value }
        },
        updateModalProps: (state, action: PayloadAction<{ name: string, value: string}>) => {
            state.ModalProps = { ...state.ModalProps, [action.payload.name]: action.payload.value }
        },
        updateModalContent: (state, action: PayloadAction<{ ContentIndex: string | number, ContentText: string }>) => {
            if (!state.ModalProps.content) return
            state.ModalProps.content[Number(action.payload.ContentIndex)] = action.payload.ContentText
        },
    }
})

export const { selectModal, updateLayoutProps, updateModalProps, updateModalContent } = ModalSlice.actions




export default ModalSlice.reducer
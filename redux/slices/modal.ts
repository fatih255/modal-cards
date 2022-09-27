import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { modalContents } from '../../lib/modalConstants';


type ModalType = {
    selectedModalName: string | undefined
    ModalProps: {
        content: string[] | undefined
        image: string | null
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
        content:undefined,
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
            state.ModalProps.content = modalContents.get('SecurityCodeModal')

        },
        updateLayoutProps: (state, action: PayloadAction<{ name: string, value: string }>) => {
            state.LayoutProps = { ...state.LayoutProps, [action.payload.name]: action.payload.value }
        },
        updateModalProps: (state, action: PayloadAction<{ name: string, value: string[] }>) => {
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
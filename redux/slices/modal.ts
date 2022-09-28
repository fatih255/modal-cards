import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getModalContentConstants, getModalLayoutConstants } from '../../lib/modalConstants';


export type ModalType = {
    selectedModalName: string | null
    ModalProps: {
        content: {
            texts: string[] | []
            radios: { title: string, description: string, value: string, selected?: boolean }[] | [],
        }
        image: string | null
    }
    LayoutProps: {
        className: string
        size: string
        position: string
        colors: string
    }
}
export const ModalInitialState: ModalType = {
    selectedModalName: null,
    ModalProps: {
        content: {
            texts: [],
            radios: []
        },
        image: null,
    },
    LayoutProps: {
        className: "top-center-modal",
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
            state.ModalProps.content = getModalContentConstants(action.payload)
            state.LayoutProps = getModalLayoutConstants(action.payload)
        },
        updateLayoutProps: (state, action: PayloadAction<{ name: string, value: string }>) => {
            state.LayoutProps = { ...state.LayoutProps, [action.payload.name]: action.payload.value }
        },
        updateModalProps: (state, action: PayloadAction<{ name: string, value: string }>) => {
            state.ModalProps = { ...state.ModalProps, [action.payload.name]: action.payload.value }
        },
        updateModalContentText: (state, action: PayloadAction<{ ContentIndex: string | number, ContentText: string }>) => {
            if (!state.ModalProps.content.texts) return
            state.ModalProps.content.texts[Number(action.payload.ContentIndex)] = action.payload.ContentText
        },
        selectRadioButton: (state, action: PayloadAction<number>) => {
            state.ModalProps.content.radios.forEach((radio, index) => {
                if (radio.selected) { delete state.ModalProps.content.radios[index].selected }
            })
            state.ModalProps.content.radios[action.payload].selected = true
        }
    }
})

export const { selectModal, updateLayoutProps, updateModalProps, updateModalContentText, selectRadioButton } = ModalSlice.actions




export default ModalSlice.reducer
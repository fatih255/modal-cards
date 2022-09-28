import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getModalContants } from '../../lib/modalConstants';


export type ModalType = {
    selectedModalName: string | null
    contents: {
        texts: string[] | []
        radios: { title: string, description: string, value: string, selected?: boolean }[] | [],
        image?: string | undefined

    }
    layout: {
        className: string
        size: string
        position: string
        colors: string
        logo: string | null
    }
}
export const ModalInitialState: ModalType = {
    selectedModalName: null,
    contents: {
        texts: [],
        radios: [],
        image: undefined,

    },
    layout: {
        className: "top-center-modal",
        size: "max-w-[600px] max-h-[600px]",
        position: "pos-mc",
        colors: 'color-primary',
        logo: null,
    }
}

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: ModalInitialState,
    reducers: {
        selectModal: (state, action: PayloadAction<string>) => {
            state.selectedModalName = action.payload
            state.contents = getModalContants(action.payload).contents
            state.layout = getModalContants(action.payload).layout
        },
        updateLayout: (state, action: PayloadAction<{ name: string, value: string }>) => {

            state.layout = { ...state.layout, [action.payload.name]: action.payload.value }
        },
        updateContents: (state, action: PayloadAction<{ name: string, value: string }>) => {

            state.contents = { ...state.contents, [action.payload.name]: action.payload.value }
        },
        updateModalContentText: (state, action: PayloadAction<{ ContentIndex: string | number, ContentText: string }>) => {
            if (!state.contents.texts) return
            state.contents.texts[Number(action.payload.ContentIndex)] = action.payload.ContentText
        },
        selectRadioButton: (state, action: PayloadAction<number>) => {
            state.contents.radios.forEach((radio, index) => {
                if (radio.selected) { delete state.contents.radios[index].selected }
            })
            state.contents.radios[action.payload].selected = true
        },
        updateRadioButton: (state, action: PayloadAction<{ radioIndex: number, title: string; description: string, value: string }>) => {
            const { radioIndex, title, description, value } = action.payload
            state.contents.radios[radioIndex] = { title, description, value }
        }
    }
})

export const { selectModal, updateLayout, updateContents, updateModalContentText, selectRadioButton, updateRadioButton } = ModalSlice.actions




export default ModalSlice.reducer
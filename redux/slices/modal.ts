import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getModalContants, modalConstants } from '../../lib/modalConstants';


export type ModalType = {
    selectedModalName: string | undefined
    contents: {
        texts: string[] | []
        radios: { title: string, description: string, value: string, selected?: boolean }[] | [],
        image?: string | undefined

    }
    layout: {
        className: string
        size: string
        position?: string
        colors: {
            bg: string,
            text: string
        }
        logo: {
            default: string | null
            uploaded: string | null
        }
    }
}
export const ModalInitialState: ModalType = {
    selectedModalName: undefined,
    contents: {
        texts: [],
        radios: [],
        image: undefined,

    },
    layout: {
        className: "",  //this attr getting from modal contants becuase each modal able to take different classname and size
        size: "",  //this attr getting from modal contants becuase each modal able to take different classname and size
        position: "pos-mc",
        colors: {
            bg: "modal-bg-color-1",
            text: "modal-text-color-1"
        },
        logo: {
            default: null,
            uploaded: null
        },
    }
}

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: ModalInitialState,
    reducers: {
        selectModal: (state, action: PayloadAction<string>) => {
            const selectedModalConstants = getModalContants(action.payload)
            state.selectedModalName = action.payload
            state.contents = selectedModalConstants.contents

            state.layout = {
                ...state.layout,
                ...selectedModalConstants.layout,
                logo: {
                    uploaded: state.layout.logo.uploaded, default: selectedModalConstants.layout.logo?.default
                }
            }

        },
        updateLayout: (state, action: PayloadAction<{ name: string, value: string | object }>) => {

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
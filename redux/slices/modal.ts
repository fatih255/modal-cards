import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getModalContants } from 'lib/modalConstants';


export type ModalType = {

    selectedModalName: string | undefined
    contents: {
        texts: string[] | []
        radios: { title: string, description: string, value: string, selected?: boolean }[] | [],
        image?: string | null
        logo?: string | null

    }
    layout: {
        className: string
        size: string
        position?: string
        colors: {
            bg: string,
            text: string
        }
    }
    uploaded: {
        logo: boolean
        image: boolean
    },
    settings: {
        visitorDevice: string
        browserLanguages: string[]
        afterXSeconds: string | null
        afterPercentageScroll: string | null
        trafficSource: string | null
        exitIntentTargetting: boolean | null
        webHookUrl: string | null
        sendFormSubmission: boolean
        sendClickData: boolean
    }
    activedSettings: (keyof ModalType['settings'])[] | any[]

}
export const ModalInitialState: ModalType = {
    selectedModalName: undefined,
    contents: {
        texts: [],
        radios: [],
        image: undefined,
        logo: undefined
    },
    layout: {
        className: "",  //this attr getting from modal contants becuase each modal able to take different classname and size
        size: "",  //this attr getting from modal contants becuase each modal able to take different classname and size
        position: "pos-mc",
        colors: {
            bg: "modal-bg-color-1",
            text: "modal-text-color-1"
        },
    },
    uploaded: {
        logo: false,
        image: false
    },
    settings: {
        browserLanguages: ['english', 'french'],
        visitorDevice: "desktop",
        afterXSeconds: '12',
        afterPercentageScroll: '50',
        trafficSource: null,
        exitIntentTargetting: false,
        webHookUrl: null,
        sendFormSubmission: false,
        sendClickData: false
    },
    activedSettings: ['visitorDevice', 'browserLanguages']
}

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: ModalInitialState,
    reducers: {


        //select methods

        selectModal: (state, action: PayloadAction<string>) => {
            const selectedModalConstants = getModalContants(action.payload)
            state.selectedModalName = action.payload
            state.contents = selectedModalConstants.contents
            state.layout = { ...state.layout, ...selectedModalConstants.layout }
            state.uploaded = { logo: false, image: false }

        },

        selectRadioButton: (state, action: PayloadAction<number>) => {
            state.contents.radios.forEach((radio, index) => {
                if (radio.selected) { delete state.contents.radios[index].selected }
            })
            state.contents.radios[action.payload].selected = true
        },

        //update methods

        settingStatus: (state, action: PayloadAction<keyof ModalType['settings']>) => { //payload is settings name

            const isSettingsActive = state.activedSettings.some(setting => setting === action.payload);
            if (isSettingsActive) state.activedSettings = [...state.activedSettings.filter(setting => setting !== action.payload)]
            if (!isSettingsActive) {
                state.activedSettings = state.activedSettings = [...state.activedSettings, action.payload]
            }

            if (action.payload === "exitIntentTargetting")
                state.settings.exitIntentTargetting = !state.settings.exitIntentTargetting;

        },
        updateSettings: (state, action: PayloadAction<{ name: keyof ModalType['settings'], value: string | string[] | boolean | null }>) => {
            state.settings = { ...state.settings, [action.payload.name]: action.payload.value }
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
        updateRadioButton: (state, action: PayloadAction<{ radioIndex: number, title: string; description: string, value: string }>) => {
            const { radioIndex, title, description, value } = action.payload
            state.contents.radios[radioIndex] = { title, description, value }
        },

        upload: (state, action: PayloadAction<{ name: 'logo' | 'image', value?: string | undefined }>) => {
            state.contents = { ...state.contents, [action.payload.name]: action.payload.value }
            state.uploaded = { ...state.uploaded, [action.payload.name]: !!action.payload.value }
        }
    }
})

export const {

    selectModal,
    updateLayout,
    updateContents,
    updateModalContentText,
    selectRadioButton,
    updateRadioButton,
    updateSettings,
    upload,
    settingStatus
} = ModalSlice.actions




export default ModalSlice.reducer
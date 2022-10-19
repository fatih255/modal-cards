import { PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { ModalType } from 'redux/slices/modal'

const settingsActions = {
  settingStatus: (
    state: WritableDraft<ModalType>,
    action: PayloadAction<keyof ModalType['settings']>,
  ) => {
    //payload is settings name

    const isSettingsActive = state.activedSettings.some(
      (setting) => setting === action.payload,
    )
    if (isSettingsActive)
      state.activedSettings = [
        ...state.activedSettings.filter(
          (setting) => setting !== action.payload,
        ),
      ]

    if (!isSettingsActive) {
      state.activedSettings = [...state.activedSettings, action.payload]
    }
    if (action.payload === 'exitIntentTargetting')
      state.settings.exitIntentTargetting = !state.settings.exitIntentTargetting
  },
  updateSettings: (
    state: WritableDraft<ModalType>,
    action: PayloadAction<{
      name: keyof ModalType['settings']
      value: string | string[] | boolean | null
    }>,
  ) => {
    state.settings = {
      ...state.settings,
      [action.payload.name]: action.payload.value,
    }

    if (action.payload.name === 'webHookUrl')
      state.activedSettings = [...state.activedSettings, action.payload.name]
  },
}

export default settingsActions

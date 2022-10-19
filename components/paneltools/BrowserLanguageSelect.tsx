import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'

//panel components
import { InputSelect, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'

export default function BrowserLanguageSelect() {
  const { browserLanguages, isActivedBrowserLanguage } = useAppSelector(
    (state) =>
      Object({
        browserLanguages: state.modal.settings.browserLanguages,
        isActivedBrowserLanguage:
          state.modal.activedSettings.includes('browserLanguages'),
      }),
    shallowEqual,
  )

  const dispatch = useAppDispatch()

  return (
    <div className='mt-[30px]'>
      <Switch
        text='Browser Language'
        fieldName='browserLanguages'
        returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
        activeDefault={isActivedBrowserLanguage}>
        <InputSelect
          onChange={(data) =>
            dispatch(updateSettings({ name: 'browserLanguages', value: data }))
          }
          selectAllText='All Languages'
          items={[
            {
              checked: browserLanguages.includes('tr'),
              text: 'Turkish',
              value: 'tr',
            },
            {
              checked: browserLanguages.includes('en'),
              text: 'English',
              value: 'en',
            },
            {
              checked: browserLanguages.includes('fr'),
              text: 'French',
              value: 'fr',
            },
            {
              checked: browserLanguages.includes('de'),
              text: 'German',
              value: 'de',
            },
            {
              checked: browserLanguages.includes('pl'),
              text: 'Polish',
              value: 'pl',
            },
            {
              checked: browserLanguages.includes('nl'),
              text: 'Dutch',
              value: 'nl',
            },
            {
              checked: browserLanguages.includes('fi'),
              text: 'Finnish',
              value: 'fi',
            },
          ]}
        />
      </Switch>
    </div>
  )
}

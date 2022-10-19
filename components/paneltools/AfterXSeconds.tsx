import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'

//panel components
import { InputText, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'

export default function AfterXSeconds() {
  const { afterXSeconds, isActiveAfterXSeconds } = useAppSelector(
    (state) =>
      Object({
        afterXSeconds: state.modal.settings.afterXSeconds,
        isActiveAfterXSeconds:
          state.modal.activedSettings.includes('afterXSeconds'),
      }),
    shallowEqual,
  )
  const dispatch = useAppDispatch()

  return (
    <Switch
      returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
      fieldName='afterXSeconds'
      text='After X Seconds'
      activeDefault={isActiveAfterXSeconds}>
      <InputText
        onChange={(value) =>
          dispatch(updateSettings({ name: 'afterXSeconds', value: value }))
        }
        text={afterXSeconds}
      />
    </Switch>
  )
}

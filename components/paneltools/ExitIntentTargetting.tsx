import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus } from 'redux/slices/modal'

//panel components
import { Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'




type Props = {}

export default function ExitIntentTargetting({ }: Props) {

    const isActiveExitIntentTargetting = useAppSelector(state => (state.modal.activedSettings.includes("exitIntentTargetting")), shallowEqual)
    const dispatch = useAppDispatch()

    return (
        <Switch
            text="Exit Intent Targetting"
            fieldName="exitIntentTargetting"
            returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
            activeDefault={isActiveExitIntentTargetting}
        />
    )
}

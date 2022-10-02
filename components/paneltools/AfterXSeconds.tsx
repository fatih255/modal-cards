
import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'

//panel components
import { InputText, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'

type Props = {}

export default function AfterXSeconds({ }: Props) {


    const { afterXSeconds, activeSettings } = useAppSelector(state => Object(
        {
            afterXSeconds: state.modal.settings.afterXSeconds,
            activeSettings: state.modal.activedSettings
        }
    ), shallowEqual)
    const dispatch = useAppDispatch()


    return (
        <Switch
            returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
            fieldName="afterXSeconds"
            text="After X Scroll"
            activeDefault={activeSettings.includes("afterXSeconds")}
        >
            <InputText
                onChange={(value) => dispatch(updateSettings({ name: "afterXSeconds", value: value }))}
                text={afterXSeconds}
            />
        </Switch>
    )
}
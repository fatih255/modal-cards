
import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'

//panel components
import { InputText, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'


type Props = {}

export default function AfterPercentageScroll({ }: Props) {


    const { afterPercentageScroll, activeSettings } = useAppSelector(state => Object(
        {
            afterPercentageScroll: state.modal.settings.afterPercentageScroll,
            activeSettings: state.modal.activedSettings
        }
    ), shallowEqual)
    const dispatch = useAppDispatch()


    return (
        <Switch
            returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
            text="After % Scroll"
            fieldName="afterPercentageScroll"
            activeDefault={activeSettings.includes("afterPercentageScroll")}
        >
            <InputText
                onChange={(value) => dispatch(updateSettings({ name: "afterPercentageScroll", value: value }))}
                text={afterPercentageScroll}
            />
        </Switch >
    )
}



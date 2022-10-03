
import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'

//panel components
import { InputText, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'


type Props = {}

export default function AfterPercentageScroll({ }: Props) {


    const { afterPercentageScroll, isAfterPercentageScroll } = useAppSelector(state => Object(
        {
            afterPercentageScroll: state.modal.settings.afterPercentageScroll,
            isAfterPercentageScroll: state.modal.activedSettings.includes("afterPercentageScroll")
        }
    ), shallowEqual)
    const dispatch = useAppDispatch()


    return (
        <Switch
            returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
            text="After % Scroll"
            fieldName="afterPercentageScroll"
            activeDefault={isAfterPercentageScroll}
        >
            <InputText
                onChange={(value) => dispatch(updateSettings({ name: "afterPercentageScroll", value: value }))}
                text={afterPercentageScroll}
            />
        </Switch >
    )
}



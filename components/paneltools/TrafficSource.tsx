import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'


//panel components
import { InputText, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'




export default function TrafficSource() {

    const { trafficSource, isActiveTrafficSource } = useAppSelector(state => Object(
        {
            trafficSource: state.modal.settings.trafficSource,
            isActiveTrafficSource: state.modal.activedSettings.includes("trafficSource")
        }), shallowEqual)

    const dispatch = useAppDispatch()


    return (
        <Switch
            fieldName="trafficSource"
            className="mb-[10px]"
            text="Traffic Source"
            returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
            activeDefault={isActiveTrafficSource}
        >
            <InputText text={trafficSource} onChange={(value) => dispatch(updateSettings({ name: "trafficSource", value: value }))} placeholder="Enter your traffic source domain" />
        </Switch>
    )
}

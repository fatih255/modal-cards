import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'


//panel components
import { InputText, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'

type Props = {}

export default function TrafficSource({ }: Props) {

    const { trafficSource, activeSettings } = useAppSelector(state => Object({ trafficSource: state.modal.settings.trafficSource, activeSettings: state.modal.activedSettings }), shallowEqual)
    const dispatch = useAppDispatch()


    return (
        <Switch
            fieldName="trafficSource"
            className="mb-[10px]"
            text="Traffic Source"
            returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
            activeDefault={activeSettings.includes("trafficSource")}
        >
            <InputText text={trafficSource} onChange={(value) => dispatch(updateSettings({ name: "trafficSource", value: value }))} placeholder="Enter your traffic source domain" />
        </Switch>
    )
}

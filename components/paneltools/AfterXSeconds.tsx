
import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'

//panel components
import { InputText, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'

type Props = {}

export default function AfterXSeconds({ }: Props) {


    const { afterXSeconds, isActiveAfterXSeconds } = useAppSelector(state => Object(
        {
            afterXSeconds: state.modal.settings.afterXSeconds,
            isActiveAfterXSeconds: state.modal.activedSettings.includes("afterXSeconds")
        }
    ), shallowEqual)
    const dispatch = useAppDispatch()

    //delay for prevent more rendering and fix preview issues
    const timeOver = useRef<boolean>(false)
    useEffect(() => {
        let timer1 = setTimeout(() => timeOver.current=true, 4000);
        return () => {
            timeOver.current=false
            clearTimeout(timer1);
        }
    }, [afterXSeconds])

    return (
        <Switch
            returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
            fieldName="afterXSeconds"
            text="After X Seconds"
            activeDefault={isActiveAfterXSeconds}
        >
            <InputText
                onChange={(value) => setTimeout(() => timeOver.current && dispatch(updateSettings({ name: "afterXSeconds", value: value })), 3000)}
                text={afterXSeconds}
            />
        </Switch>
    )
}
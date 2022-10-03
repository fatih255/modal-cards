
import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingStatus, updateSettings } from 'redux/slices/modal'

//icons
import DesktopIcon from 'icons/desktop.svg'
import MobileIcon from 'icons/mobile.svg'

//panel components
import { CheckBoxButton, Switch } from 'components/panelComponents'
import { shallowEqual } from 'react-redux'


type Props = {}


export default function VisitorDeviceSelect({ }: Props) {

    const { visitorDevice, isActiveVisitorDevice } = useAppSelector(state => Object(
        {
            visitorDevice: state.modal.settings.visitorDevice,
            isActiveVisitorDevice: state.modal.activedSettings.includes("visitorDevice")
        }), shallowEqual)
    const dispatch = useAppDispatch()

    return (
        <div>
            <Switch
                className="!mt-4"
                text="Visitor Device"
                fieldName="visitorDevice"
                activeDefault={isActiveVisitorDevice}
                returnedValue={({ fieldName }) => dispatch(settingStatus(fieldName))}
            >
                <CheckBoxButton
                    returnedValue={(data) => { dispatch(updateSettings({ name: "visitorDevice", value: data })) }}
                    items={
                        [
                            { checked: visitorDevice.includes('desktop'), text: "Desktop", value: "desktop", icon: <DesktopIcon fill="#999999" /> },
                            { checked: visitorDevice.includes('mobile'), text: "Mobile", value: "mobile", icon: <MobileIcon fill="#999999" /> },
                        ]
                    } />
            </Switch>
        </div>
    )
}
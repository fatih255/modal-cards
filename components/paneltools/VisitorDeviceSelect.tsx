
import React from 'react'
import DesktopIcon from 'icons/desktop.svg'
import MobileIcon from 'icons/mobile.svg'



type Props = {}

//panel components
import { CheckBoxButton, Switch } from 'components/panelComponents'

export default function VisitorDeviceSelect({ }: Props) {
    return (
        <div>
            <Switch className="!mt-4" text="Visitor Device" />
            <CheckBoxButton
                returnedValue={(data) => { console.log(data) }}
                items={
                    [
                        { text: "Desktop", value: "desktop", icon: <DesktopIcon fill="#999999" /> },
                        { text: "Mobile", value: "mobile", icon: <MobileIcon fill="#999999" /> },
                    ]
                } />
        </div>
    )
}
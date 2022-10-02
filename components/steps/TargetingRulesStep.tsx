import React from 'react'
import NumberItem from 'components/NumberItem'

// Tools used by Targeting Rules Step
import BrowserLanguageSelect from 'components/paneltools/BrowserLanguageSelect'

//panel components
import { InputText, Switch, CheckBoxButton } from 'components/panelComponents'
import VisitorDeviceSelect from 'components/paneltools/VisitorDeviceSelect'


type Props = {}

export default function TargetingRulesStep({ }: Props) {
    return (
        <div data-step="4" className="flex flex-col w-full mt-6 ">
            {/* Step-3 ---Content */}
            <hr className="h-14 border-none" />
            <div className="dosticky">
                <NumberItem value="4 Targeting Rules" />
            </div>

            <VisitorDeviceSelect />
            <Switch text="After X seconds" />
            <InputText text="3" />
            <Switch text="After % Scroll" />
            <InputText text="12" />
            <Switch className="mb-[10px]" text="Traffic Source" />
            <InputText placeholder="Enter your traffic source domain" />

            <div className="mt-[30px]">
                <Switch text="Browser Language" />
                <BrowserLanguageSelect />
            </div>
            <Switch text="Exit Intent Targetting" />
        </div>
    )
}
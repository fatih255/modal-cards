import React from 'react'
import NumberItem from 'components/NumberItem'
import Switch from 'components/Switch'
import ContentInput from 'components/ContentInput'

type Props = {}

export default function TargetingRulesStep({ }: Props) {
    return (
        <div data-step="4" className="flex flex-col w-full mt-6 ">
            {/* Step-3 ---Content */}
            <div className="dosticky">
                <NumberItem value="4 Targeting Rules" />
            </div>

            <label className="!mt-0">Edit your content</label>

            <Switch text="Visitor Device" />

            <Switch text="After X seconds" />
            <ContentInput />
            <Switch text="After % Scroll" />
            <ContentInput text="12" />
            <Switch className="mb-[10px]" text="Traffic Source" />
            <ContentInput placeholder="Enter your traffic source domain" />

            <div className="mt-[75px]">
                <Switch text="Browser Language" />
                <ContentInput placeholder="Select" />
            </div>
        </div>
    )
}